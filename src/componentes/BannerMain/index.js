import React from 'react';
import { BannerContainer, Container, ImageBanner } from './styles';
import banner from '../../assets/img/inovamaranhao.jpg';

export default function MainWrapper() {
	return (
		<BannerContainer>
		<Container>
			<Container.Item>
				<Container.Title>
          			<Container.Span>Seja bem-vindx a plataforma de streaming teste da Inova Maranhão{' '}</Container.Span>
					<Container.Span>Eixo Educação</Container.Span>.
				</Container.Title>
			</Container.Item>

			<Container.Item>
				<ImageBanner src={banner} alt="Inovaflix" />
			</Container.Item>
		</Container>
	</BannerContainer>
	);
}

