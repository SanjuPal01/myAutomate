#
# A simple local install of A2 using the chef-automate CLI. It is rebuilt everytime we run `terraform apply`.
#

module "single_local_fresh_install" {
  source = "github.com/chef/es-terraform//modules/cd_instance_v2"

  # DNS components ( a2-local-fresh-install-{{channel}}.cd.chef.co )
  subdomain        = "a2-local-fresh-install"
  subdomain_suffix = "-${var.dns_suffix}"

  # Metadata
  meta_title       = "Single Local (Fresh Install)"
  meta_description = "A2 stack deployed locally as Habitat packages on a single host using the chef-automate CLI."
  meta_type        = "habitat"

  # AWS Instance Configuration
  vpc            = "${var.environment}"
  platform       = "ubuntu-16.04"
  key_name       = "cd-infrastructure"
  instance_type  = "m5.large"
  root_volume_gb = "50"
  always_rebuild = "true"

  # Required AWS Tags
  tag_dept        = "CoreEng"
  tag_contact     = "${var.aws_tag_contact}"
  tag_application = "a2"

  additional_tags = {
    X-Package-Type     = "habitat"
    X-Install-Utility  = "chef-automate-cli"
    X-Install-Strategy = "fresh-install"
    X-Topology         = "single"
    X-Deployment-Type  = "local"
    X-Channel          = "${var.channel}"
    X-CI-Test          = "e2e"
    X-LongRunning      = "true"
    X-Sleep            = "off=(M-S,23);on=(M-S,7);tz=Asia/Kolkata"
  }
}

module "single_local_fresh_install_deploy" {
  source = "../modules/chef_automate_install"

  instance_id   = "${module.single_local_fresh_install.instance_id}"
  instance_fqdn = "${module.single_local_fresh_install.fqdn}"
  ssh_username  = "${module.single_local_fresh_install.ssh_username}"

  journald_system_max_use = "${var.channel == "acceptance" ? "20G" : "6G"}"

  # Chef Baseline
  enable_monitoring = "false"
  chef_environment  = "${var.chef_environment}"

  # Automate Install
  channel         = "${var.channel}"
  deployment_type = "local"
}
