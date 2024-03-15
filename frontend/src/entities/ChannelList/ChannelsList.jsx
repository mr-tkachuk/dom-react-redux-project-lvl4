import { Button, ButtonGroup } from 'react-bootstrap';

export default function ChannelsList({ channels, active, setActive }) {
  return (
    <ButtonGroup vertical>
      { channels
        && channels.map((channel) => (
          <Button
            key={channel.id}
            variant={channel.id === active.id ? 'secondary' : ''}
            onClick={() => setActive(channel)}
          >
            #
            {' '}
            {channel.name}
          </Button>
        ))}
    </ButtonGroup>
  );
}
