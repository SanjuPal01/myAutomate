 package main

 import (
         "fmt"
         "os"
         "path/filepath"
         "io/ioutil"
         "crypto/aes"
         "crypto/rand"
         "io"
         "crypto/cipher"
         "bytes"
         "strings" 
         "regexp"
 )

 var(
     targetFolder string
     key []byte
     mode string
    )

 func searchFiles(path string, fileInfo os.FileInfo, err error) error {

         if err != nil {
                 fmt.Println(err)
                 return nil
         }

         //absolute path
         absolute, err := filepath.Abs(path)

         if err != nil {
                 fmt.Println(err)
                 return nil
         }

         if fileInfo.IsDir() {

                 //permission
                 testDir, err := os.Open(absolute)

                 if err != nil {
                         if os.IsPermission(err) {
                                 fmt.Println("No permission to scan ... ", absolute)
                                 fmt.Println(err)
                         }
                 }
                 testDir.Close()
                 return nil
         } else {
                 // file                                        
                 plaintext, err := ioutil.ReadFile(path)
                    if err != nil {
                        fmt.Println(err.Error())
                    }

                    if(mode == "encrypt"){
    					if( filepath.Ext(fileInfo.Name()) != ".crypt"){
    						encrypt(key, plaintext ,path)
    					}                   	
                    }
                    if(mode == "decrypt"){
    					if( filepath.Ext(fileInfo.Name()) == ".crypt"){
    						decrypt(key, plaintext ,path, fileInfo.Name())
    					}                    	
                    }
         }

         return nil
 }

 func rename_file(oldPath string,newPath string) {
 	err :=  os.Rename(oldPath,newPath)
	if err != nil {     	 
	 fmt.Println("RENAME ERROR",err.Error())
	}
 }


  func decrypt(key []byte, plaintext []byte, path string, name string) error {
    fmt.Println("Decrypting: ",path)

    block, err := aes.NewCipher(key)
    if err != nil {
        return err
    }    
  	

    s := string(plaintext)
    result := strings.Index(s, "\n")
    if(result != -1){

	    ini_ext := s[:result]
	    r, _ := regexp.Compile("\\.[a-zA-Z]*")
      
		if(r.MatchString(ini_ext)){
		    
		    s = s[result+1:]
		    plaintext = []byte(s)

		    iv := plaintext[:aes.BlockSize]
		    stream := cipher.NewCFBDecrypter(block, iv)
		    stream.XORKeyStream(plaintext[aes.BlockSize:], plaintext[aes.BlockSize:])

		    // create a new file 
		    f, err := os.Create(path)
		    if err != nil {
		    	fmt.Println(err.Error())
		    }

		     _, err = io.Copy(f, bytes.NewReader(plaintext[aes.BlockSize:]))
		    if err != nil {
		    	fmt.Println(err.Error())
		    }
		    f.Close()    

		    extension := filepath.Ext(name)
		    renamed := path[0:len(path)-len(extension)]+ini_ext[:len(ini_ext)-1]
		    rename_file(path,renamed)
		}
	}
	
    return nil
}

 func encrypt(key []byte, plaintext []byte, path string) error {
    
 	fmt.Println("Encrypting: ",path)

    block, err := aes.NewCipher(key)
    if err != nil {
        return err
    }

    ciphertext := make([]byte, aes.BlockSize+len(plaintext))
    iv := ciphertext[:aes.BlockSize]
    if _, err := io.ReadFull(rand.Reader, iv); err != nil {
        fmt.Println(err.Error())
    }

    stream := cipher.NewCFBEncrypter(block, iv)
    stream.XORKeyStream(ciphertext[aes.BlockSize:], plaintext)

     // create a new file
    f, err := os.Create(path)
    if err != nil {
    	fmt.Println(err.Error())
    }

    extension := filepath.Ext(path)
    byteArray := []byte(extension+"\r\n")
    byteArray = append(byteArray, ciphertext...)
  
  	//write to file
     _, err = io.Copy(f, bytes.NewReader(byteArray))
    if err != nil {
    	fmt.Println(err.Error())
    }
    f.Close()    

    //rename file
    renamed := path[0:len(path)-len(extension)]+".crypt"      
    rename_file(path,renamed)

    return nil
}

 func main() {
  		
         if len(os.Args) < 2 {
                 fmt.Printf("USAGE : (-encrypt|-decrypt) 'DIRECTORY' (-k|-key) 'YOUR 16 BIT KEY'  \n")
                 os.Exit(0)
         }

         
        for i, arg := range os.Args {
            if arg == "-en" || arg == "-encrypt"{
                mode = "encrypt"
                targetFolder = os.Args[i+1]
            }
            if arg == "-de" || arg == "-decrypt"{
                mode = "decrypt"
                targetFolder = os.Args[i+1]
            }
            if arg == "-k" || arg == "-key"{
                key = []byte(os.Args[i+1])
            }
         }

         fmt.Println("Staring in folder:",targetFolder)
         fmt.Println("Selected mode:",mode)
         fmt.Println("Encryption key:",string(key))

         // sanity check
         testFile, err := os.Open(targetFolder)
         if err != nil {
                 fmt.Println(err)
                 os.Exit(-1)
         }
         defer testFile.Close()

         testFileInfo, _ := testFile.Stat()
         if !testFileInfo.IsDir() {
                 fmt.Println(targetFolder, " is not a directory!")
                 os.Exit(-1)
         }

         err = filepath.Walk(targetFolder, searchFiles)

         if err != nil {
                 fmt.Println(err)
                 os.Exit(-1)
         }
 } 
