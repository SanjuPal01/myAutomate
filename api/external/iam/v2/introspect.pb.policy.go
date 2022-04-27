// Code generated by protoc-gen-policy. DO NOT EDIT.
// source: external/iam/v2/introspect.proto

package v2

import (
	policy "github.com/chef/automate/api/external/iam/v2/policy"
	request "github.com/chef/automate/api/external/iam/v2/request"
)

func init() {
	policy.MapMethodTo("/chef.automate.api.iam.v2.Authorization/IntrospectAll", "iam:introspect", "iam:introspect:getAll", "GET", "/apis/iam/v2/introspect", func(unexpandedResource string, input interface{}) string {
		return unexpandedResource
	})
	policy.MapMethodTo("/chef.automate.api.iam.v2.Authorization/IntrospectSome", "iam:introspect", "iam:introspect:getSome", "POST", "/apis/iam/v2/introspect_some", func(unexpandedResource string, input interface{}) string {
		return unexpandedResource
	})
	policy.MapMethodTo("/chef.automate.api.iam.v2.Authorization/Introspect", "iam:introspect", "iam:introspect:get", "POST", "/apis/iam/v2/introspect", func(unexpandedResource string, input interface{}) string {
		if m, ok := input.(*request.IntrospectReq); ok {
			return policy.ExpandParameterizedResource(unexpandedResource, func(want string) string {
				switch want {
				case "path":
					return m.Path
				default:
					return ""
				}
			})
		}
		return ""
	})
}
