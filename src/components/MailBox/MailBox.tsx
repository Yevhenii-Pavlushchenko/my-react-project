import css from './MailBox.module.css'


interface MailboxProps {
  username: string;
  messages: string[];
}

// export default function Mailbox({ username, messages }: MailboxProps) {
//   return (
//     <>
//       <p>Hello {username}</p>
//       {messages.length > 0 && (
//         <p>You have {messages.length} unread messages</p>
//       )}
//     </>
//   );
// }

export default function Mailbox({ username, messages }: MailboxProps) {

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked",event);
    console.log("Target:",event.target);
    
    
  }
  return (
    <>
      <p className={css.textTitle}>Hello 
        <span className={css.textTitleAccent}> {username} </span>
         !
      </p>
      {messages.length > 0 ? (
        <>
          <p className={css.messageText}>You have 
            <span className={css.messageTextAccent}> {messages.length} </span>
            unread messages</p>
          <p className={css.checkText}>Check your inbox to read them!</p>
          <button
              className={css.btnOpen}
              onClick={handleClick}>
            Open inbox
          </button>
        </>
      ) : (
        <p className={css.noMessageText}>No unread messages</p>
      )}
    </>
  );
}
