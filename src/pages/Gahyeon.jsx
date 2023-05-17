import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TextField from '@mui/material/TextField';

//정보 입력 화면 Information

export default function Gahyeon() {
    return (
        <div>

            <IconButton
                style={{
                    position: 'absolute',
                    top: '5.21%',
                    left: '5%'
                }}
            >
                <ArrowBackIosNewIcon />
            </IconButton>

            <p
                style={{
                    position: 'absolute',
                    left: '7.95%',
                    right: '59.23%',
                    top: '12.68%',
                    bottom: '83.89%',
                    fontFamily: 'Pretendard',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '24px',
                    lineHeight: '29px',
                    color: '#666666',
                }}
            >
                Information
            </p>

            {/* <p
        style={{
          position: 'absolute',
          left: '11.03%',
          right: '66.67%',
          top: '24.29%',
          bottom: '72.87%',
          fontFamily: 'Pretendard',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '20px',
          lineHeight: '24px',
          color: '#666666',
        }}
      >
        Full name
      </p> */}

            <TextField required
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    left: '9.74%',
                    right: '10%',
                    top: '28.91%',
                    bottom: '65.76%',
                    borderRadius: '8px'
                }}
            />

            {/* <p
        style={{
          position: 'absolute',
          left: '11.03%',
          right: '84.1%',
          top: '38.86%',
          bottom: '58.29%',
          fontFamily: 'Pretendard',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '20px',
          lineHeight: '24px',
          color: '#666666',
        }}
      >
        ID
      </p> */}

            <TextField required
                id="outlined-basic"
                label="ID"
                variant="outlined"
                style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    left: '9.74%',
                    right: '10%',
                    top: '43.48%',
                    bottom: '51.18%',
                    borderRadius: '8px'
                }}
            />

            {/* <p
        style={{
          position: 'absolute',
          left: '11.03%',
          right: '65.38%',
          top: '53.44%',
          bottom: '43.72%',
          fontFamily: 'Pretendard',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '20px',
          lineHeight: '24px',
          color: '#666666',
        }}
      >
        University
      </p> */}

            <TextField required
                id="outlined-basic"
                label="University"
                variant="outlined"
                style={{
                    boxSizing: 'border-box',
                    position: 'absolute',
                    left: '9.74%',
                    right: '10%',
                    top: '58.06%',
                    bottom: '36.61%',
                    borderRadius: '8px'
                }}
            />

            <Button
                variant="contained"
                style={{
                    position: 'absolute',
                    width: '331px',
                    height: '62px',
                    left: '50%',
                    top: '732px',
                    borderRadius: '15px',
                    transform: 'translate(-50%, -50%)',
                    background: 'linear-gradient(92.48deg, #AAA4E9 2.41%, #D09FDE 29.18%, #E1879C 64.76%, #F58282 97.3%)'
                }}
            >
                Connect Wallet
            </Button>
        </div>
    );
}