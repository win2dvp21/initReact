import * as React from 'react';
import Button from '@mui/material/Button';


//시작 화면 Home

export default function Home() {
  return (
    <div>
      <p 
        style={{
          position: 'absolute',
          width: '100%',
          height: '92px',
          fontFamily: 'Pretendard',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '77.0166px',
          lineHeight: '92px',
          color: '#852929',
          left: '50%',
          top: '40%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        Ikyky
      </p>
      <Button 
        variant="contained" 
        style={{
          position: 'absolute',
          width: '331px',
          height: '62px',
          left: '50%',
          top: '732px',
          background: '#F09D99',
          borderRadius: '15px',
          transform: 'translate(-50%, -50%)'
        }}
      >
        Connect Wallet
      </Button>
    </div>
  );
}