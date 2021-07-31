PostgreSQL database export
Exporting PostgreSQL database to a file by using the pg_dump command line program
pg_dump is an effective tool to backup postgres database. pg_dump is used to back up a local database and restore it on a remote database at the same time, using a single command.
1) Login webhosting account via SSH.
2) Type this command and replace the username and dbname.
   # pg_dump -U USERNAME DBNAME > dbexport.pgsql
3) Type password at the password prompt.
4) All the contents of database DBNAME are moved to the dbexport.pgsql file.
 
Exporting PostgreSQL database using phpPgAdmin
phpPgAdmin is a web-based administration tool for PostgreSQL written in PHP.  It is based on the popular phpMyAdmin interface originally written for MySQL administration.
1) Log in to cPanel.
2) Click phpPgAdmin in the database section.
3) Expand Servers, expand PostgreSQL in the phpPgAdmin window.
4) Click the name of the database that you want to export.
5) Click Export on the top of the menu bar.
6) Click Structure and data.
7) Select SQL.
8) Click Download.
9) Click Export.
10) In the file dialog, select a location to save the file, and then click Save.
 
Create a new PostgreSQL database and assign a user
1) Log in to cPanel account.
2) Click PostgreSQL Databases in the Databases section of the cPanel home screen.
3) Type the name of the database in the ‘Database Name’ text box under ‘Create New Database’.
4) Click Create Database.
5) Click Go Back after creating database.
6) Select the user that you want to add in the User list box under Add User to Database.
7) Select the new database in the Database list box.
8) Click Submit.
After creating new database in cPanel, you can import the database’s contents.
 
Importing PostgreSQL database
Importing PostgreSQL database using the psql program
The primary front-end for PostgreSQL is the psql command-line program. It can be used to enter SQL queries directly, or execute them from a file. psql provides a number of meta-commands and various shell-like features to facilitate writing scripts and automating a wide variety of tasks; for example, tab completion of object names and SQL syntax.
1) Transfer the dbexport.pgsql file to your Hosting account using SCP, SFTP, or FTP.
2) Log in to Hosting account via SSH.
3) Type the following command and replace USERNAME with your username and DBNAME with the name of the database that you want to import the data into.
  #  psql -U USERNAME DBNAME < dbexport.pgsql
4) The DBNAME database should now contain the data that is in the dbexport.pgsql file.
 
Importing PostgreSQL database using phpPgAdmin
1) Log in to cPanel.
2) Click phpPgAdmin in the Databases section of the cPanel home screen.
3) Expand Servers, expand PostgreSQL in the left pane of the phpPgAdmin window and then click the name of the database that you want to import the data into.
4) On the top menu bar, click SQL.
5) Click Browse.
6) Select where the import file is located, and then click Open.
7) Click Execute.

