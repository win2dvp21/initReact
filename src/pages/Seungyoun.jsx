import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import MobileStepper from '@mui/material/MobileStepper';

import productmain from '../seungImage/productmain.png';
import productButtonImage from '../seungImage/productButtonImage.png'; // 추가된 이미지 import

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Seungyoun() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div>
            <IconButton
                size="small"
                sx={{
                    color: "#9945FF",
                    position: "relative",
                    top: "44px",
                    left: "31px",
                    height: "21px"
                }}
            >
                <ArrowBackIosRoundedIcon />
            </IconButton>
            <img
                src={productmain}
                alt="프로덕트 메인이미지"
                style={{
                    width: '390px',
                    height: '212px',
                    position: 'relative',
                    top: '60px'
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '301px',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}
            >
                <MobileStepper
                    variant="dots"
                    steps={5}
                    position="static"
                    activeStep={activeStep}
                    sx={{ maxWidth: 400, flexGrow: 1 }}
                />
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '322px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '390px',
                    height: '8px',
                    backgroundColor: '#F1F1F1'
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '343px',
                    left: '20px',
                    width: '21px',
                    height: '21px',
                    backgroundColor: 'black',
                    borderRadius: '50%'
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '343px',
                    left: '45px',
                    fontSize: '12px',
                    color: '#7B7B7B'
                }}
            >
                kkakkon
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '377px',
                    left: '0',
                    width: '100%',
                    height: '1px',
                    backgroundColor: '#D9D9D9'
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '398px',
                    left: '20px',
                    fontSize: '28px',
                    fontFamily: 'Arial',
                    fontWeight: 'bold'
                }}
            >
                65,000원
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '419px',
                    right: '20px',
                    fontSize: '12px',
                    color: '#5196FF',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <div style={{ marginRight: '3px' }}>•••</div>
                <div>(27/50명)</div>
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '436px',
                    fontSize: '14px',
                    left: '20px'
                }}
            >
                Ewha w. univ. Pear Flower Jacket
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '482px',
                    fontSize: '14px',
                    color: '#7B7B7B',
                    left: '20px'
                }}
            >
                구매기간
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '482px',
                    left: '120px',
                    fontSize: '14px',
                    color: '#000000'
                }}
            >
                5/1(월) ~ 5/13(토)
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '505px',
                    fontSize: '14px',
                    color: '#7B7B7B',
                    left: '20px'
                }}
            >
                모집인원
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '505px',
                    left: '120px',
                    fontSize: '14px',
                    color: '#000000'
                }}
            >
                10 ~ 50명
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '539px',
                    left: '20px',
                    fontSize: '10px',
                    color: '#A7A7A7',
                    maxWidth: '220px',
                    whiteSpace: 'pre-wrap'
                }}
            >
                *If the minimum number of people is not met, 
                the payment will be canceled automatically.
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '578px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '390px',
                    height: '8px',
                    backgroundColor: '#F1F1F1'
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: '599px',
                    fontSize: '14px',
                    left: '20px',
                    color: '#7B7B7B'
                }}
            >
                More Details
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '630px',
                    left: '0',
                    width: '100%',
                    height: '1px',
                    backgroundColor: '#D9D9D9'
                }}
            />
            
            <div
                style={{
                    position: 'fixed',
                    bottom: '19px',
                    left: 0,
                    right: 0,
                    zIndex: 9999,
                    borderTop: '1px solid #D9D9D9',
                    display: 'flex',
                    justifyContent: 'space-between', // 좌우 정렬
                    padding: '0 20px', // 좌우 여백
                    alignItems: 'center' // 수직 정렬
                }}
            >
                <BottomNavigation
                    showLabels
                    value={activeStep}
                    onChange={(event, newValue) => {
                        setActiveStep(newValue);
                    }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '-20px' // 10px 아래로 조정
                    }}
                >
                    <BottomNavigationAction
                        label="Favorites"
                        icon={isFavorite ? <FavoriteIcon style={{ color: 'red' }} /> : <FavoriteBorderIcon style={{ color: 'red' }} />}
                        onClick={handleFavoriteClick}
                    />

                </BottomNavigation>


                {/* 새로운 버튼 추가 */}
                <div
                    style={{
                        position: 'relative',
                        width: '271px',
                        height: '62px',
                        marginTop: '20px',
                        display: 'flex',
                        justifyContent: 'center', // 가로 중앙 정렬
                        alignItems: 'center' // 세로 중앙 정렬
                    }}
                >
                    <img
                        src={productButtonImage}
                        alt="버튼 이미지"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '4px',
                        }}
                    />
                </div>
            </div>

        </div>
    );
}
