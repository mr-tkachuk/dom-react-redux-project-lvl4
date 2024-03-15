import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import getChannels from './getChannels';
import { activeSelector, channelsSelector } from './selectors';
import ChannelsList from '../../entities/ChannelList/ChannelsList';
import { channelsActions } from './channelsSlice';

export default function Channels() {
  const dispatch = useDispatch();
  const channels = useSelector(channelsSelector);
  const active = useSelector(activeSelector);
  useEffect(() => {
    dispatch(getChannels());
  }, []);

  return (
    <>
      <div className="d-flex mt-1 justify-content-between align-items-center mb-2 ps-4 pe-2 p-4">
        <b>Каналы</b>
        <Button variant="outline-primary" className="p-1">+</Button>
      </div>
      <ChannelsList
        setActive={(id) => dispatch(channelsActions.setActive(id))}
        channels={channels}
        active={active}
      />
    </>
  );
}
