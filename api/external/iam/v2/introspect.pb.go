// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.15.6
// source: external/iam/v2/introspect.proto

package v2

import (
	context "context"
	_ "github.com/chef/automate/api/external/annotations/iam"
	request "github.com/chef/automate/api/external/iam/v2/request"
	response "github.com/chef/automate/api/external/iam/v2/response"
	proto "github.com/golang/protobuf/proto"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
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

var File_external_iam_v2_introspect_proto protoreflect.FileDescriptor

var file_external_iam_v2_introspect_proto_rawDesc = []byte{
	0x0a, 0x20, 0x65, 0x78, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x2f, 0x69, 0x61, 0x6d, 0x2f, 0x76,
	0x32, 0x2f, 0x69, 0x6e, 0x74, 0x72, 0x6f, 0x73, 0x70, 0x65, 0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x18, 0x63, 0x68, 0x65, 0x66, 0x2e, 0x61, 0x75, 0x74, 0x6f, 0x6d, 0x61, 0x74,
	0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x69, 0x61, 0x6d, 0x2e, 0x76, 0x32, 0x1a, 0x1c, 0x67, 0x6f,
	0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x28, 0x65, 0x78, 0x74, 0x65,
	0x72, 0x6e, 0x61, 0x6c, 0x2f, 0x69, 0x61, 0x6d, 0x2f, 0x76, 0x32, 0x2f, 0x72, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x2f, 0x69, 0x6e, 0x74, 0x72, 0x6f, 0x73, 0x70, 0x65, 0x63, 0x74, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x29, 0x65, 0x78, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x2f, 0x69,
	0x61, 0x6d, 0x2f, 0x76, 0x32, 0x2f, 0x72, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x2f, 0x69,
	0x6e, 0x74, 0x72, 0x6f, 0x73, 0x70, 0x65, 0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x2a, 0x65, 0x78, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2f, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x6e, 0x6e, 0x6f, 0x74, 0x61,
	0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x32, 0xc8, 0x04, 0x0a, 0x0d,
	0x41, 0x75, 0x74, 0x68, 0x6f, 0x72, 0x69, 0x7a, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0xb5, 0x01,
	0x0a, 0x0d, 0x49, 0x6e, 0x74, 0x72, 0x6f, 0x73, 0x70, 0x65, 0x63, 0x74, 0x41, 0x6c, 0x6c, 0x12,
	0x2a, 0x2e, 0x63, 0x68, 0x65, 0x66, 0x2e, 0x61, 0x75, 0x74, 0x6f, 0x6d, 0x61, 0x74, 0x65, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x69, 0x61, 0x6d, 0x2e, 0x76, 0x32, 0x2e, 0x49, 0x6e, 0x74, 0x72, 0x6f,
	0x73, 0x70, 0x65, 0x63, 0x74, 0x41, 0x6c, 0x6c, 0x52, 0x65, 0x71, 0x1a, 0x28, 0x2e, 0x63, 0x68,
	0x65, 0x66, 0x2e, 0x61, 0x75, 0x74, 0x6f, 0x6d, 0x61, 0x74, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x69, 0x61, 0x6d, 0x2e, 0x76, 0x32, 0x2e, 0x49, 0x6e, 0x74, 0x72, 0x6f, 0x73, 0x70, 0x65, 0x63,
	0x74, 0x52, 0x65, 0x73, 0x70, 0x22, 0x4e, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x19, 0x12, 0x17, 0x2f,
	0x61, 0x70, 0x69, 0x73, 0x2f, 0x69, 0x61, 0x6d, 0x2f, 0x76, 0x32, 0x2f, 0x69, 0x6e, 0x74, 0x72,
	0x6f, 0x73, 0x70, 0x65, 0x63, 0x74, 0x8a, 0xb5, 0x18, 0x10, 0x0a, 0x0e, 0x69, 0x61, 0x6d, 0x3a,
	0x69, 0x6e, 0x74, 0x72, 0x6f, 0x73, 0x70, 0x65, 0x63, 0x74, 0x8a, 0xb5, 0x18, 0x17, 0x12, 0x15,
	0x69, 0x61, 0x6d, 0x3a, 0x69, 0x6e, 0x74, 0x72, 0x6f, 0x73, 0x70, 0x65, 0x63, 0x74, 0x3a, 0x67,
	0x65, 0x74, 0x41, 0x6c, 0x6c, 0x12, 0xc6, 0x01, 0x0a, 0x0e, 0x49, 0x6e, 0x74, 0x72, 0x6f, 0x73,
	0x70, 0x65, 0x63, 0x74, 0x53, 0x6f, 0x6d, 0x65, 0x12, 0x2b, 0x2e, 0x63, 0x68, 0x65, 0x66, 0x2e,
	0x61, 0x75, 0x74, 0x6f, 0x6d, 0x61, 0x74, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x69, 0x61, 0x6d,
	0x2e, 0x76, 0x32, 0x2e, 0x49, 0x6e, 0x74, 0x72, 0x6f, 0x73, 0x70, 0x65, 0x63, 0x74, 0x53, 0x6f,
	0x6d, 0x65, 0x52, 0x65, 0x71, 0x1a, 0x28, 0x2e, 0x63, 0x68, 0x65, 0x66, 0x2e, 0x61, 0x75, 0x74,
	0x6f, 0x6d, 0x61, 0x74, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x69, 0x61, 0x6d, 0x2e, 0x76, 0x32,
	0x2e, 0x49, 0x6e, 0x74, 0x72, 0x6f, 0x73, 0x70, 0x65, 0x63, 0x74, 0x52, 0x65, 0x73, 0x70, 0x22,
	0x5d, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x1e, 0x22, 0x1c, 0x2f, 0x61, 0x70, 0x69, 0x73, 0x2f, 0x69,
	0x61, 0x6d, 0x2f, 0x76, 0x32, 0x2f, 0x69, 0x6e, 0x74, 0x72, 0x6f, 0x73, 0x70, 0x65, 0x63, 0x74,
	0x5f, 0x73, 0x6f, 0x6d, 0x65, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x03, 0x3a, 0x01, 0x2a, 0x8a, 0xb5,
	0x18, 0x10, 0x0a, 0x0e, 0x69, 0x61, 0x6d, 0x3a, 0x69, 0x6e, 0x74, 0x72, 0x6f, 0x73, 0x70, 0x65,
	0x63, 0x74, 0x8a, 0xb5, 0x18, 0x18, 0x12, 0x16, 0x69, 0x61, 0x6d, 0x3a, 0x69, 0x6e, 0x74, 0x72,
	0x6f, 0x73, 0x70, 0x65, 0x63, 0x74, 0x3a, 0x67, 0x65, 0x74, 0x53, 0x6f, 0x6d, 0x65, 0x12, 0xb5,
	0x01, 0x0a, 0x0a, 0x49, 0x6e, 0x74, 0x72, 0x6f, 0x73, 0x70, 0x65, 0x63, 0x74, 0x12, 0x27, 0x2e,
	0x63, 0x68, 0x65, 0x66, 0x2e, 0x61, 0x75, 0x74, 0x6f, 0x6d, 0x61, 0x74, 0x65, 0x2e, 0x61, 0x70,
	0x69, 0x2e, 0x69, 0x61, 0x6d, 0x2e, 0x76, 0x32, 0x2e, 0x49, 0x6e, 0x74, 0x72, 0x6f, 0x73, 0x70,
	0x65, 0x63, 0x74, 0x52, 0x65, 0x71, 0x1a, 0x28, 0x2e, 0x63, 0x68, 0x65, 0x66, 0x2e, 0x61, 0x75,
	0x74, 0x6f, 0x6d, 0x61, 0x74, 0x65, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x69, 0x61, 0x6d, 0x2e, 0x76,
	0x32, 0x2e, 0x49, 0x6e, 0x74, 0x72, 0x6f, 0x73, 0x70, 0x65, 0x63, 0x74, 0x52, 0x65, 0x73, 0x70,
	0x22, 0x54, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x19, 0x22, 0x17, 0x2f, 0x61, 0x70, 0x69, 0x73, 0x2f,
	0x69, 0x61, 0x6d, 0x2f, 0x76, 0x32, 0x2f, 0x69, 0x6e, 0x74, 0x72, 0x6f, 0x73, 0x70, 0x65, 0x63,
	0x74, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x03, 0x3a, 0x01, 0x2a, 0x8a, 0xb5, 0x18, 0x10, 0x0a, 0x0e,
	0x69, 0x61, 0x6d, 0x3a, 0x69, 0x6e, 0x74, 0x72, 0x6f, 0x73, 0x70, 0x65, 0x63, 0x74, 0x8a, 0xb5,
	0x18, 0x14, 0x12, 0x12, 0x69, 0x61, 0x6d, 0x3a, 0x69, 0x6e, 0x74, 0x72, 0x6f, 0x73, 0x70, 0x65,
	0x63, 0x74, 0x3a, 0x67, 0x65, 0x74, 0x42, 0x2e, 0x5a, 0x2c, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x63, 0x68, 0x65, 0x66, 0x2f, 0x61, 0x75, 0x74, 0x6f, 0x6d, 0x61,
	0x74, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x65, 0x78, 0x74, 0x65, 0x72, 0x6e, 0x61, 0x6c, 0x2f,
	0x69, 0x61, 0x6d, 0x2f, 0x76, 0x32, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_external_iam_v2_introspect_proto_goTypes = []interface{}{
	(*request.IntrospectAllReq)(nil),  // 0: chef.automate.api.iam.v2.IntrospectAllReq
	(*request.IntrospectSomeReq)(nil), // 1: chef.automate.api.iam.v2.IntrospectSomeReq
	(*request.IntrospectReq)(nil),     // 2: chef.automate.api.iam.v2.IntrospectReq
	(*response.IntrospectResp)(nil),   // 3: chef.automate.api.iam.v2.IntrospectResp
}
var file_external_iam_v2_introspect_proto_depIdxs = []int32{
	0, // 0: chef.automate.api.iam.v2.Authorization.IntrospectAll:input_type -> chef.automate.api.iam.v2.IntrospectAllReq
	1, // 1: chef.automate.api.iam.v2.Authorization.IntrospectSome:input_type -> chef.automate.api.iam.v2.IntrospectSomeReq
	2, // 2: chef.automate.api.iam.v2.Authorization.Introspect:input_type -> chef.automate.api.iam.v2.IntrospectReq
	3, // 3: chef.automate.api.iam.v2.Authorization.IntrospectAll:output_type -> chef.automate.api.iam.v2.IntrospectResp
	3, // 4: chef.automate.api.iam.v2.Authorization.IntrospectSome:output_type -> chef.automate.api.iam.v2.IntrospectResp
	3, // 5: chef.automate.api.iam.v2.Authorization.Introspect:output_type -> chef.automate.api.iam.v2.IntrospectResp
	3, // [3:6] is the sub-list for method output_type
	0, // [0:3] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_external_iam_v2_introspect_proto_init() }
func file_external_iam_v2_introspect_proto_init() {
	if File_external_iam_v2_introspect_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_external_iam_v2_introspect_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_external_iam_v2_introspect_proto_goTypes,
		DependencyIndexes: file_external_iam_v2_introspect_proto_depIdxs,
	}.Build()
	File_external_iam_v2_introspect_proto = out.File
	file_external_iam_v2_introspect_proto_rawDesc = nil
	file_external_iam_v2_introspect_proto_goTypes = nil
	file_external_iam_v2_introspect_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// AuthorizationClient is the client API for Authorization service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type AuthorizationClient interface {
	IntrospectAll(ctx context.Context, in *request.IntrospectAllReq, opts ...grpc.CallOption) (*response.IntrospectResp, error)
	IntrospectSome(ctx context.Context, in *request.IntrospectSomeReq, opts ...grpc.CallOption) (*response.IntrospectResp, error)
	Introspect(ctx context.Context, in *request.IntrospectReq, opts ...grpc.CallOption) (*response.IntrospectResp, error)
}

type authorizationClient struct {
	cc grpc.ClientConnInterface
}

func NewAuthorizationClient(cc grpc.ClientConnInterface) AuthorizationClient {
	return &authorizationClient{cc}
}

func (c *authorizationClient) IntrospectAll(ctx context.Context, in *request.IntrospectAllReq, opts ...grpc.CallOption) (*response.IntrospectResp, error) {
	out := new(response.IntrospectResp)
	err := c.cc.Invoke(ctx, "/chef.automate.api.iam.v2.Authorization/IntrospectAll", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authorizationClient) IntrospectSome(ctx context.Context, in *request.IntrospectSomeReq, opts ...grpc.CallOption) (*response.IntrospectResp, error) {
	out := new(response.IntrospectResp)
	err := c.cc.Invoke(ctx, "/chef.automate.api.iam.v2.Authorization/IntrospectSome", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authorizationClient) Introspect(ctx context.Context, in *request.IntrospectReq, opts ...grpc.CallOption) (*response.IntrospectResp, error) {
	out := new(response.IntrospectResp)
	err := c.cc.Invoke(ctx, "/chef.automate.api.iam.v2.Authorization/Introspect", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AuthorizationServer is the server API for Authorization service.
type AuthorizationServer interface {
	IntrospectAll(context.Context, *request.IntrospectAllReq) (*response.IntrospectResp, error)
	IntrospectSome(context.Context, *request.IntrospectSomeReq) (*response.IntrospectResp, error)
	Introspect(context.Context, *request.IntrospectReq) (*response.IntrospectResp, error)
}

// UnimplementedAuthorizationServer can be embedded to have forward compatible implementations.
type UnimplementedAuthorizationServer struct {
}

func (*UnimplementedAuthorizationServer) IntrospectAll(context.Context, *request.IntrospectAllReq) (*response.IntrospectResp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method IntrospectAll not implemented")
}
func (*UnimplementedAuthorizationServer) IntrospectSome(context.Context, *request.IntrospectSomeReq) (*response.IntrospectResp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method IntrospectSome not implemented")
}
func (*UnimplementedAuthorizationServer) Introspect(context.Context, *request.IntrospectReq) (*response.IntrospectResp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Introspect not implemented")
}

func RegisterAuthorizationServer(s *grpc.Server, srv AuthorizationServer) {
	s.RegisterService(&_Authorization_serviceDesc, srv)
}

func _Authorization_IntrospectAll_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(request.IntrospectAllReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthorizationServer).IntrospectAll(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chef.automate.api.iam.v2.Authorization/IntrospectAll",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthorizationServer).IntrospectAll(ctx, req.(*request.IntrospectAllReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _Authorization_IntrospectSome_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(request.IntrospectSomeReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthorizationServer).IntrospectSome(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chef.automate.api.iam.v2.Authorization/IntrospectSome",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthorizationServer).IntrospectSome(ctx, req.(*request.IntrospectSomeReq))
	}
	return interceptor(ctx, in, info, handler)
}

func _Authorization_Introspect_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(request.IntrospectReq)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthorizationServer).Introspect(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/chef.automate.api.iam.v2.Authorization/Introspect",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthorizationServer).Introspect(ctx, req.(*request.IntrospectReq))
	}
	return interceptor(ctx, in, info, handler)
}

var _Authorization_serviceDesc = grpc.ServiceDesc{
	ServiceName: "chef.automate.api.iam.v2.Authorization",
	HandlerType: (*AuthorizationServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "IntrospectAll",
			Handler:    _Authorization_IntrospectAll_Handler,
		},
		{
			MethodName: "IntrospectSome",
			Handler:    _Authorization_IntrospectSome_Handler,
		},
		{
			MethodName: "Introspect",
			Handler:    _Authorization_Introspect_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "external/iam/v2/introspect.proto",
}
