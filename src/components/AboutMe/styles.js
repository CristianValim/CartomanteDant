import styled, { keyframes } from "styled-components";

const cardAnimationOne = keyframes`
    0% {
        animation-timing-function: ease-in;
        transform: rotateZ(0deg);
    }

    100% {
        animation-timing-function: tease-in;
        transform: rotateZ(-3deg);
    }
`;

const cardAnimationTwo = keyframes`
    0% {
        animation-timing-function: ease-in;
        transform: rotateZ(0deg) translateX(0rem);
    }

    100% {
        animation-timing-function: ease-in;
        transform: rotateZ(-12deg) translateX(-6rem);
    }
`;


const cardAnimationThree = keyframes`
    0% {
        animation-timing-function: ease-in;
        transform: rotateZ(0deg) translateX(0rem);
    }

    100% {
        animation-timing-function: ease-in;
        transform: rotateZ(-30deg) translateX(-10rem);
    }
`;

    const cardAnimationOneMob = keyframes`
    0% {
        animation-timing-function: ease-in;
        transform: rotateZ(0deg);
    }

    100% {
        animation-timing-function: ease-in;
        transform: rotateZ(-2deg);
    }
`;

const cardAnimationTwoMob = keyframes`
    0% {
        animation-timing-function: ease-in;
        transform: rotateZ(0deg) translateX(0rem);
    }

    100% {
        animation-timing-function: ease-in;
        transform: rotateZ(-12deg) translateX(-3rem);
    }
`;


const cardAnimationThreeMob = keyframes`
    0% {
        animation-timing-function: ease-in;
        transform: rotateZ(0deg) translateX(0rem);
    }

    100% {
        animation-timing-function: ease-in;
        transform: rotateZ(-30deg) translateX(-5rem);
    }
`;

export const Container = styled.div`
    height: 100vh;
    margin-inline: auto;
    padding: 1rem 2.8rem 1rem 3.9rem;
    display: flex;
    align-items: center;
    gap: 2.3rem;

    .profile {
        position: relative;
        min-height: 30vh;
        max-width: 30rem;
        display: grid;
        grid-template-areas: 'stack';

        >h1 {
            position: absolute;
            top: -7rem;
            left: -5rem;

            font-size: 6.4rem;

            color: ${({theme}) => theme.COLORS.COLOR_INNER};

            transform: rotate(-13deg);
        }

        >.stars {
            max-width: 6rem;

            position: absolute;
            top: -10rem;
            right: 5rem;
        }
    }

    .profile > * {
        grid-area: stack;
    }

    .profile > img {
        width: 100%;
    }
    
    .one {
        z-index: 3;
    }

    .one.visible {
        animation: ${cardAnimationOne} 1s forwards;
    }

    .two {
        z-index: 2;
    }

    .two.visible{
        animation: ${cardAnimationTwo} 1s forwards;
    }
    
    .three {
        z-index: 1;
    }

    .three.visible{
        animation: ${cardAnimationThree} 1s forwards;
    }

    .text {
        max-width: 50rem;
    }

    p {
        font-size: 1.4rem;
        color: ${({ theme }) => theme.COLORS.COLOR_MAIN};
    }

    .indent {
        text-indent: 3ch;
    }

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .profile {
            max-width: 15rem;

            >h1 {
            top: -4.5rem;
            left: -4rem;

            font-size: 4rem;
        }

        >.stars {
            max-width: 4rem;

            position: absolute;
            top: -7.5rem;
            right: 1rem;
        }
        }

        .one.visible{
           animation: ${cardAnimationOneMob} 1s forwards;
        }
        
        .two.visible{
            animation: ${cardAnimationTwoMob} 1s forwards;
        }
        
        .three.visible{
            animation: ${cardAnimationThreeMob} 1s forwards;
        }
    }
`;
