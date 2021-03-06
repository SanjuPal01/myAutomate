
run_id8http://localhost/viz/#/compliance/reporting/nodes/run_idhuman-readable-name"uuid*1.30.02 (:?

ssh 2Basic SSH 21.1.0"=Verify that SSH Server and SSH Client are configured securely*Chef Software, Inc.2 Proprietary, All rights reserved:Chef Software, Inc.Bsupport@chef.ioJ@f56ef31e9e8be7c9064e84f1db699d3f0175924a0ee4517e3a626c38727ebf93R b?
basic-3fff?+/etc/ssh should have limited access to 0755"?control 'basic-3' do
  impact 0.5
  title '/etc/ssh should have limited access to 0755'
  desc '
    The OpenSSH configuration folder should have restricted
    access permissions. It is an important step towards making
    sure, that configuration files are only changed by
    priviledged users, while leaving them readable for the
    SSH client.
  '
  describe file('/etc/ssh') do
    it { should_not be_writable.by('group') }
    it { should_not be_writable.by('others') }
    it { should_not be_readable.by('others') }
  end
end
*?The OpenSSH configuration folder should have restricted
access permissions. It is an important step towards making
sure, that configuration files are only changed by
priviledged users, while leaving them readable for the
SSH client.2(
$base/ssh/controls/ssh_folder_spec.rb%J<
passed-File /etc/ssh should not be writable by group??9J=
passed.File /etc/ssh should not be writable by others~?c9Jr
failed.File /etc/ssh should not be readable by others0e`;*3expected File /etc/ssh not to be readable by others:?
ssh 3Basic SSH 31.1.0"=Verify that SSH Server and SSH Client are configured securely*Chef Software, Inc.2 Proprietary, All rights reserved:Chef Software, Inc.Bsupport@chef.ioJ@f56ef31e9e8be7c9064e84f1db699d3f0175924a0ee4517e3a626c38727ebf93R b?	
basic-3fff?+/etc/ssh should have limited access to 0755"?control 'basic-3' do
  impact 0.5
  title '/etc/ssh should have limited access to 0755'
  desc '
    The OpenSSH configuration folder should have restricted
    access permissions. It is an important step towards making
    sure, that configuration files are only changed by
    priviledged users, while leaving them readable for the
    SSH client.
  '
  describe file('/etc/ssh') do
    it { should_not be_writable.by('group') }
    it { should_not be_writable.by('others') }
    it { should_not be_readable.by('others') }
  end
end
*?The OpenSSH configuration folder should have restricted
access permissions. It is an important step towards making
sure, that configuration files are only changed by
priviledged users, while leaving them readable for the
SSH client.2(
$base/ssh/controls/ssh_folder_spec.rb%J<
passed-File /etc/ssh should not be writable by group??9Jr
failed.File /etc/ssh should not be writable by others~?c9*3expected File /etc/ssh not to be writable by othersJr
failed.File /etc/ssh should not be readable by others0e`;*3expected File /etc/ssh not to be readable by others