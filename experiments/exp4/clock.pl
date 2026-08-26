#!/usr/bin/perl
use strict;
use warnings;
use CGI qw(:standard);

print header(-refresh => '1');

my ($sec, $min, $hour) = localtime();
my $time_str = sprintf("%02d : %02d : %02d", $hour, $min, $sec);

print <<HTML;
<html>
<head>
    <title>Server Digital Clock</title>
    <style>
        body { background: #222; color: #00ffcc; text-align: center; font-family: monospace; }
        .clock { font-size: 50px; margin-top: 20%; border: 3px solid #00ffcc; display: inline-block; padding: 20px; }
    </style>
</head>
<body>
    <h2>PERL CGI SERVER CLOCK</h2>
    <div class="clock">$time_str</div>
</body>
</html>
HTML