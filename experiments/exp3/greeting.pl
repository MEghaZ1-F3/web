#!/usr/bin/perl
use strict;
use warnings;
use CGI qw(:standard);

print header();
my $name = param('username') || "Guest";

my @greetings = (
    "Welcome to CSVTU Web Technology Portal, $name!",
    "Great to see you here today, $name! Have an inspired session.",
    "Greetings $name! Wishing you a productive day in the lab.",
    "Hello $name! Keep learning, building, and innovating."
);

my $random_index = int(rand(scalar @greetings));
my $selected_message = $greetings[$random_index];

print "<html><body><h2>Random Greeting Result</h2>";
print "<p style='color:green; font-size:18px;'>$selected_message</p>";
print "</body></html>";