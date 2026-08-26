#!/usr/bin/perl
use strict;
use warnings;
use CGI qw(:standard);
use DBI;

print header();
my $name = param('name');
my $age  = param('age');

my $dbh = DBI->connect("DBI:mysql:database=webtech_db;host=localhost", "root", "password")
    or die "Database connection failed: $DBI::errstr";

if ($name && $age) {
    my $sth = $dbh->prepare("INSERT INTO user_records (name, age) VALUES (?, ?)");
    $sth->execute($name, $age);
}

my $sth = $dbh->prepare("SELECT id, name, age FROM user_records");
$sth->execute();

print "<h2>User Records in MySQL</h2><table border='1'>";
print "<tr><th>ID</th><th>Name</th><th>Age</th></tr>";
while (my @row = $sth->fetchrow_array()) {
    print "<tr><td>$row[0]</td><td>$row[1]</td><td>$row[2]</td></tr>";
}
print "</table>";
$dbh->disconnect();