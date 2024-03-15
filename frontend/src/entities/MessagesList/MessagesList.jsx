export default function MessagesList({ messages }) {
  return (
    <div className="overflow-auto px-5">
      {
        messages
        && messages.map((message) => (
          <div
            className="text-break mb-2"
            key={message.id}
          >
            <b>{message.username}</b>
            :
            { ` ${message.body}`}
          </div>
        ))
      }
    </div>
  );
}
