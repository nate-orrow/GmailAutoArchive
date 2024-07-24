/**
 * @function      onMsgReacieved
 * @description   is triggered every minute
 *                adds a label "autoarchive" to the message.
 */

function onMsgRecieved() {

  let label = GmailApp.getUserLabelByName( 'autoarchive' );
  let count = GmailApp.getInboxUnreadCount();

  if( count > 0 ) {
    
    let threads = GmailApp.getInboxThreads(0,count);
    for( let i in threads ) {
  
      label.addToThread( threads[ i ] );

    }
  }

}

/**
 * @function      autoArchiveMsgs
 * @description   is triggered every 10 minutes
 *                moves unstarred read message to the archive and
 *                automatically removes the "autoarchive" label.
 */
function autoArchiveMsgs() {
  
  let label = GmailApp.getUserLabelByName( 'autoarchive' );
  let threads = label.getThreads( 0, 50 );

  for( let i in threads ) {
    
    // get the thread and the first message in the thread
    let thread = threads[ i ];
    let msg = thread.getMessages()[0];

    // if the message is not starred, and it's not read then...
    if( !msg.isStarred() && !msg.isUnread() ) {
      thread.moveToArchive();
      thread.removeLabel( label );
    }

  }  

}
