// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.15.6
// source: automate-gateway/api/telemetry/telemetry.proto

package telemetry

import (
	context "context"
	_ "github.com/chef/automate/api/external/annotations/iam"
	proto "github.com/golang/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

type TelemetryRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *TelemetryRequest) Reset() {
	*x = TelemetryRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_automate_gateway_api_telemetry_telemetry_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TelemetryRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TelemetryRequest) ProtoMessage() {}

func (x *TelemetryRequest) ProtoReflect() protoreflect.Message {
	mi := &file_automate_gateway_api_telemetry_telemetry_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TelemetryRequest.ProtoReflect.Descriptor instead.
func (*TelemetryRequest) Descriptor() ([]byte, []int) {
	return file_automate_gateway_api_telemetry_telemetry_proto_rawDescGZIP(), []int{0}
}

type TelemetryResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	LicenseId        string `protobuf:"bytes,1,opt,name=license_id,json=licenseId,proto3" json:"license_id,omitempty"`
	CustomerName     string `protobuf:"bytes,4,opt,name=customer_name,json=customerName,proto3" json:"customer_name,omitempty"`
	CustomerId       string `protobuf:"bytes,5,opt,name=customer_id,json=customerId,proto3" json:"customer_id,omitempty"`
	LicenseType      string `protobuf:"bytes,6,opt,name=license_type,json=licenseType,proto3" json:"license_type,omitempty"`
	TelemetryEnabled bool   `protobuf:"varint,7,opt,name=telemetry_enabled,json=telemetryEnabled,proto3" json:"telemetry_enabled,omitempty"`
	TelemetryUrl     string `protobuf:"bytes,8,opt,name=telemetry_url,json=telemetryUrl,proto3" json:"telemetry_url,omitempty"`
	MaxNodes         int64  `protobuf:"varint,9,opt,name=max_nodes,json=maxNodes,proto3" json:"max_nodes,omitempty"`
	DeploymentId     string `protobuf:"bytes,10,opt,name=deployment_id,json=deploymentId,proto3" json:"deployment_id,omitempty"`
}

func (x *TelemetryResponse) Reset() {
	*x = TelemetryResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_automate_gateway_api_telemetry_telemetry_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TelemetryResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TelemetryResponse) ProtoMessage() {}

func (x *TelemetryResponse) ProtoReflect() protoreflect.Message {
	mi := &file_automate_gateway_api_telemetry_telemetry_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TelemetryResponse.ProtoReflect.Descriptor instead.
func (*TelemetryResponse) Descriptor() ([]byte, []int) {
	return file_automate_gateway_api_telemetry_telemetry_proto_rawDescGZIP(), []int{1}
}

func (x *TelemetryResponse) GetLicenseId() string {
	if x != nil {
		return x.LicenseId
	}
	return ""
}

func (x *TelemetryResponse) GetCustomerName() string {
	if x != nil {
		return x.CustomerName
	}
	return ""
}

func (x *TelemetryResponse) GetCustomerId() string {
	if x != nil {
		return x.CustomerId
	}
	return ""
}

func (x *TelemetryResponse) GetLicenseType() string {
	if x != nil {
		return x.LicenseType
	}
	return ""
}

func (x *TelemetryResponse) GetTelemetryEnabled() bool {
	if x != nil {
		return x.TelemetryEnabled
	}
	return false
}

func (x *TelemetryResponse) GetTelemetryUrl() string {
	if x != nil {
		return x.TelemetryUrl
	}
	return ""
}

func (x *TelemetryResponse) GetMaxNodes() int64 {
	if x != nil {
		return x.MaxNodes
	}
	return 0
}

func (x *TelemetryResponse) GetDeploymentId() string {
	if x != nil {
		return x.DeploymentId
	}
	return ""
}

var File_automate_gateway_api_telemetry_telemetry_proto protoreflect.FileDescriptor

var file_automate_gateway_api_telemetry_telemetry_proto_rawDesc = []byte{
	0x0a, 0x2e, 0x61, 0x75, 0x74, 0x6f, 0x6d, 0x61, 0x74, 0x65, 0x2d, 0x67, 0x61, 0x74, 0x65, 0x77,
	0x61, 0x79, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x74, 0x65, 0x6c, 0x65, 0x6d, 0x65, 0x74, 0x72, 0x79,
	0x2f, 0x74, 0x65, 0x6c, 0x65, 0x6d, 0x65, 0x74, 0x72, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x1b, 0x63, 0x68, 0x65, 0x66, 0x2e, 0x61, 0x75, 0x74, 0x6f, 0x6d, 0x61, 0x74, 0x65, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x74, 0x65, 0x6c, 0x65, 0x6d, 0x65, 0x74, 0x72, 0x79, 0x1a, 0x1c, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x2a, 0x65, 0x78, 0x74,
	0x65, 0x72, 0x6e, 0x61, 0x6c, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x73, 0x2f, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x12, 0x0a, 0x10, 0x54, 0x65, 0x6c, 0x65, 0x6d,
	0x65, 0x74, 0x72, 0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x22, 0xaf, 0x02, 0x0a, 0x11,
	0x54, 0x65, 0x6c, 0x65, 0x6d, 0x65, 0x74, 0x72, 0x79, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x6c, 0x69, 0x63, 0x65, 0x6e, 0x73, 0x65, 0x5f, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x6c, 0x69, 0x63, 0x65, 0x6e, 0x73, 0x65, 0x49, 0x64,
	0x12, 0x23, 0x0a, 0x0d, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x5f, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65,
	0x72, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65,
	0x72, 0x5f, 0x69, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x63, 0x75, 0x73, 0x74,
	0x6f, 0x6d, 0x65, 0x72, 0x49, 0x64, 0x12, 0x21, 0x0a, 0x0c, 0x6c, 0x69, 0x63, 0x65, 0x6e, 0x73,
	0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x6c, 0x69,
	0x63, 0x65, 0x6e, 0x73, 0x65, 0x54, 0x79, 0x70, 0x65, 0x12, 0x2b, 0x0a, 0x11, 0x74, 0x65, 0x6c,
	0x65, 0x6d, 0x65, 0x74, 0x72, 0x79, 0x5f, 0x65, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x18, 0x07,
	0x20, 0x01, 0x28, 0x08, 0x52, 0x10, 0x74, 0x65, 0x6c, 0x65, 0x6d, 0x65, 0x74, 0x72, 0x79, 0x45,
	0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x12, 0x23, 0x0a, 0x0d, 0x74, 0x65, 0x6c, 0x65, 0x6d, 0x65,
	0x74, 0x72, 0x79, 0x5f, 0x75, 0x72, 0x6c, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x74,
	0x65, 0x6c, 0x65, 0x6d, 0x65, 0x74, 0x72, 0x79, 0x55, 0x72, 0x6c, 0x12, 0x1b, 0x0a, 0x09, 0x6d,
	0x61, 0x78, 0x5f, 0x6e, 0x6f, 0x64, 0x65, 0x73, 0x18, 0x09, 0x20, 0x01, 0x28, 0x03, 0x52, 0x08,
	0x6d, 0x61, 0x78, 0x4e, 0x6f, 0x64, 0x65, 0x73, 0x12, 0x23, 0x0a, 0x0d, 0x64, 0x65, 0x70, 0x6c,
	0x6f, 0x79, 0x6d, 0x65, 0x6e, 0x74, 0x5f, 0x69, 0x64, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0c, 0x64, 0x65, 0x70, 0x6c, 0x6f, 0x79, 0x6d, 0x65, 0x6e, 0x74, 0x49, 0x64, 0x32, 0xdd, 0x01,
	0x0a, 0x09, 0x54, 0x65, 0x6c, 0x65, 0x6d, 0x65, 0x74, 0x72, 0x79, 0x12, 0xcf, 0x01, 0x0a, 0x19,
	0x47, 0x65, 0x74, 0x54, 0x65, 0x6c, 0x65, 0x6d, 0x65, 0x74, 0x72, 0x79, 0x43, 0x6f, 0x6e, 0x66,
	0x69, 0x67, 0x75, 0x72, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2d, 0x2e, 0x63, 0x68, 0x65, 0x66,
	0x2e, 0x61, 0x75, 0x74, 0x6f, 0x6d, 0x61, 0x74, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74, 0x65,
	0x6c, 0x65, 0x6d, 0x65, 0x74, 0x72, 0x79, 0x2e, 0x54, 0x65, 0x6c, 0x65, 0x6d, 0x65, 0x74, 0x72,
	0x79, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2e, 0x2e, 0x63, 0x68, 0x65, 0x66, 0x2e,
	0x61, 0x75, 0x74, 0x6f, 0x6d, 0x61, 0x74, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x74, 0x65, 0x6c,
	0x65, 0x6d, 0x65, 0x74, 0x72, 0x79, 0x2e, 0x54, 0x65, 0x6c, 0x65, 0x6d, 0x65, 0x74, 0x72, 0x79,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x53, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x1a,
	0x12, 0x18, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x30, 0x2f, 0x74, 0x65, 0x6c, 0x65, 0x6d, 0x65,
	0x74, 0x72, 0x79, 0x2f, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x8a, 0xb5, 0x18, 0x0f, 0x0a, 0x0d,
	0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x3a, 0x63, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x8a, 0xb5, 0x18,
	0x1c, 0x12, 0x1a, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x3a, 0x74, 0x65, 0x6c, 0x65, 0x6d, 0x65,
	0x74, 0x72, 0x79, 0x43, 0x6f, 0x6e, 0x66, 0x69, 0x67, 0x3a, 0x67, 0x65, 0x74, 0x42, 0x44, 0x5a,
	0x42, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x68, 0x65, 0x66,
	0x2f, 0x61, 0x75, 0x74, 0x6f, 0x6d, 0x61, 0x74, 0x65, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e,
	0x65, 0x6e, 0x74, 0x73, 0x2f, 0x61, 0x75, 0x74, 0x6f, 0x6d, 0x61, 0x74, 0x65, 0x2d, 0x67, 0x61,
	0x74, 0x65, 0x77, 0x61, 0x79, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x74, 0x65, 0x6c, 0x65, 0x6d, 0x65,
	0x74, 0x72, 0x79, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_automate_gateway_api_telemetry_telemetry_proto_rawDescOnce sync.Once
	file_automate_gateway_api_telemetry_telemetry_proto_rawDescData = file_automate_gateway_api_telemetry_telemetry_proto_rawDesc
)

func file_automate_gateway_api_telemetry_telemetry_proto_rawDescGZIP() []byte {
	file_automate_gateway_api_telemetry_telemetry_proto_rawDescOnce.Do(func() {
		file_automate_gateway_api_telemetry_telemetry_proto_rawDescData = protoimpl.X.CompressGZIP(file_automate_gateway_api_telemetry_telemetry_proto_rawDescData)
	})
	return file_automate_gateway_api_telemetry_telemetry_proto_rawDescData
}

var file_automate_gateway_api_telemetry_telemetry_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_automate_gateway_api_telemetry_telemetry_proto_goTypes = []interface{}{
	(*TelemetryRequest)(nil),  // 0: chef.automate.api.telemetry.TelemetryRequest
	(*TelemetryResponse)(nil), // 1: chef.automate.api.telemetry.TelemetryResponse
}
var file_automate_gateway_api_telemetry_telemetry_proto_depIdxs = []int32{
	0, // 0: chef.automate.api.telemetry.Telemetry.GetTelemetryConfiguration:input_type -> chef.automate.api.telemetry.TelemetryRequest
	1, // 1: chef.automate.api.telemetry.Telemetry.GetTelemetryConfiguration:output_type -> chef.automate.api.telemetry.TelemetryResponse
	1, // [1:2] is the sub-list for method output_type
	0, // [0:1] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_automate_gateway_api_telemetry_telemetry_proto_init() }
func file_automate_gateway_api_telemetry_telemetry_proto_init() {
	if File_automate_gateway_api_telemetry_telemetry_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_automate_gateway_api_telemetry_telemetry_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TelemetryRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_automate_gateway_api_telemetry_telemetry_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TelemetryResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_automate_gateway_api_telemetry_telemetry_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_automate_gateway_api_telemetry_telemetry_proto_goTypes,
		DependencyIndexes: file_automate_gateway_api_telemetry_telemetry_proto_depIdxs,
		MessageInfos:      file_automate_gateway_api_telemetry_telemetry_proto_msgTypes,
	}.Build()
	File_automate_gateway_api_telemetry_telemetry_proto = out.File
	file_automate_gateway_api_telemetry_telemetry_proto_rawDesc = nil
	file_automate_gateway_api_telemetry_telemetry_proto_goTypes = nil
	file_automate_gateway_api_telemetry_telemetry_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// TelemetryClient is the client API for Telemetry service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type TelemetryClient interface {
	GetTelemetryConfiguration(ctx context.Context, in *TelemetryRequest, opts ...grpc.CallOption) (*TelemetryResponse, error)
}

type telemetryClient struct {
	cc grpc.ClientConnInterface
}

func NewTelemetryClient(cc grpc.ClientConnInterface) TelemetryClient {
	return &telemetryClient{cc}
}

func (c *telemetryClient) GetTelemetryConfiguration(ctx context.Context, in *TelemetryRequest, opts ...grpc.CallOption) (*TelemetryResponse, error) {
	out := new(TelemetryResponse)
	err := c.cc.Invoke(ctx, "/chef.automate.api.telemetry.Telemetry/GetTelemetryConfiguration", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TelemetryServer is the server API for Telemetry service.
type TelemetryServer interface {
	GetTelemetryConfiguration(context.Context, *TelemetryRequest) (*TelemetryResponse, error)
}

// UnimplementedTelemetryServer can be embedded to have forward compatible implementations.
type UnimplementedTelemetryServer struct {
}

func (*UnimplementedTelemetryServer) GetTelemetryConfiguration(context.Context, *TelemetryRequest) (*TelemetryResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetTelemetryConfiguration not implemented")
}

func RegisterTelemetryServer(s *grpc.Server, srv TelemetryServer) {
	s.RegisterService(&_Telemetry_serviceDesc, srv)
}

func _Telemetry_GetTelemetryConfiguration_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TelemetryRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TelemetryServer).GetTelemetryConfiguration(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chef.automate.api.telemetry.Telemetry/GetTelemetryConfiguration",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TelemetryServer).GetTelemetryConfiguration(ctx, req.(*TelemetryRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Telemetry_serviceDesc = grpc.ServiceDesc{
	ServiceName: "chef.automate.api.telemetry.Telemetry",
	HandlerType: (*TelemetryServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetTelemetryConfiguration",
			Handler:    _Telemetry_GetTelemetryConfiguration_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "automate-gateway/api/telemetry/telemetry.proto",
}
