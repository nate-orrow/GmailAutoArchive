GmailAutoArchive uses user defined lables and stars to determine if a message should be archived.

To use

1. go to https://script.google.com/home and create a project
2. Copy and paste the code from script.js into the new project editor
3. Create a label in your gmail account called "autoarchive"
4. Create two time based triggers for each of the functions in the script. onMsgRecieved is every minute, autoArchiveMsgs is every 10 minutes

-- once an email has been read, if you star the message/thread, the script will ignore the message when archiving. Once you're happy for the message to be archived, remove the star and the message will be archived the next time the function runs.

Feel free to take and adapt.
