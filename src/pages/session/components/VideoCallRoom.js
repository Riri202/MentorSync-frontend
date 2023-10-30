import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { Paper } from '@mui/material';

function VideoCallRoom({ sessionId }) {
  const call = (element) => {
    const token = ZegoUIKitPrebuilt.generateKitTokenForTest(
      Number(process.env.REACT_APP_ZEGOCLOUD_APP_ID),
      process.env.REACT_APP_ZEGOCLOUD_SERVER_SECRET,
      sessionId,
      Date.now().toString(),
      Date.now().toString(),
    );

    const zegoCloud = ZegoUIKitPrebuilt.create(token);
    zegoCloud.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Copy link',
          url: `${window.location.protocol}//${window.location.host}${window.location.pathname}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      preJoinViewConfig: {
        title: 'Join Session', // The title of the prejoin view. Uses "enter Room" by default.
      },
    });
  };
  return (
    <div className="p-2 xs:p-6 md:p-16 xl:px-40 2xl:px-60 flex mt-11 bg-[#F3F2EE] min-h-screen">
      <Paper
        ref={call}
        className="p-5 min-w-full flex flex-col items-center justify-center"
      />
    </div>
  );
}

export default VideoCallRoom;
