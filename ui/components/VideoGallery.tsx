import React from 'react';
import styles from '../styles/components/VideoGallery.module.scss';
import VideoCard from './VideoCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function NextArrow(props: any) {
	const { className, style, onClick } = props;
	return <div className={`${styles.nextArrow} ${className}`} style={style} onClick={onClick} />;
}

function PrevArrow(props: any) {
	const { className, style, onClick } = props;
	return <div className={`${styles.prevArrow} ${className}`} style={style} onClick={onClick} />;
}

const sliderSettings = {
	dots: false,
	infinite: false,
	speed: 700,
	slidesToShow: 3,
	slidesToScroll: 1,
	swipeToSlide: true,
	nextArrow: <NextArrow />,
	prevArrow: <PrevArrow />,
	responsive: [
		{
			breakpoint: 1550,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 1100,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};

const VideoGallery = () => {
	return (
		<div className={styles.galleryContainer}>
			<div className={styles.galleryHeader}>
				<h2>Redefine what tennis is with the best</h2>
			</div>
			<div className={styles.galleryContent}>
				<Slider {...sliderSettings}>
					<VideoCard
						buttonVisible={true}
						img={''}
						title=''
						description=''
						onClick={() => window.scrollTo(0, 0)}
						context='Home'
					/>
					<VideoCard
						buttonVisible={true}
						img={''}
						title=''
						description=''
						onClick={() => window.scrollTo(0, 0)}
						context='Home'
					/>
					<VideoCard
						buttonVisible={true}
						img={''}
						title=''
						description=''
						onClick={() => window.scrollTo(0, 0)}
						context='Home'
					/>
					<VideoCard
						buttonVisible={true}
						img={''}
						title=''
						description=''
						onClick={() => window.scrollTo(0, 0)}
						context='Home'
					/>
				</Slider>
			</div>
		</div>
	);
};

export default VideoGallery;
