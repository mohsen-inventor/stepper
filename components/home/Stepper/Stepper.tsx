'use client'
import React, { useRef, useState, WheelEvent } from 'react';
import css from './Stepper.module.scss';
import Container from '@/components/_layout/Container/Container';
import ImageRatio from '@/components/_ui/ImageRatio/ImageRatio';
import Title from '@/components/_ui/Title/Title';

// step data interface
interface StepData {
    isActive?: boolean;
    navLabel: string;
    title: string;
    description: string;
    imgUrl: string;
    imgAlt: string;
}

type Props = {};

const Stepper = (props: Props) => {
    // refs
    const stepperRef = useRef<HTMLDivElement>(null);
    // state
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    // local data
    const stepsData: StepData[] = [
        {
            isActive: true,
            navLabel: "friendly",
            title: "Our Journey towards Digital Excellence",
            description: "Experience the transformation of a Saudi digital bank as it evolves from its humble origins to become a trailblazer in financial services, setting new standards for excellence in the digital realm.",
            imgUrl: "/images/eye.jpg",
            imgAlt: "D36 digital bank vision",
        },
        {
            isActive: false,
            navLabel: "fast",
            title: "Revolutionizing Saudi Arabia's Banking Landscape",
            description: "reshaping the very essence of banking in the country by introducing an innovative mobile app that seamlessly merged cutting-edge security measures with unmatched convenience",
            imgUrl: "/images/achievement.jpg",
            imgAlt: "D360 digital bank, Our achievements",
        },
        {
            isActive: false,
            navLabel: "transparent",
            title: "Community Roots to Global",
            description: "Unveil the inspiring story of a Saudi digital bank that harnessed its strong community engagement to extend its influence globally, becoming a leading player in the international financial arena.",
            imgUrl: "/images/solution.jpg",
            imgAlt: "D360 digital bank, global reach",
        },
        {
            isActive: false,
            navLabel: "secure",
            title: "Saudi Arabia's Green Approach to Digital Banking Success",
            description: "Dive into the narrative of a Saudi digital bank that not only achieved financial success but also carved a distinctive path by embracing sustainability at its core",
            imgUrl: "/images/success.webp",
            imgAlt: "D360 digital bank, Saudi Arabia's Digital Banking Success",
        }
    ];

    const handleMouseNavigation = (event: WheelEvent<HTMLElement>) => {
        const scrollDelta = event.deltaY;
        const stepChange = Math.sign(scrollDelta); // -1 for scrolling up, 1 for scrolling down
        const newStepIndex = currentStepIndex + stepChange;
        const isValidIndex = newStepIndex >= 0 && newStepIndex < stepsData.length;

        // prevent scrolling beyond the first and last steps
        if (isValidIndex) setCurrentStepIndex((prev) => prev + stepChange);
    };

    const renderStep = (step: any, index: number) => {
        const isActive = index === currentStepIndex && css.active;

        return (
            <div className={`${css.step} ${isActive}`} key={`step-${index}`}>
                <div className={css.stepContent}>
                    <div className={`${css.text} animate`}>
                        <Title
                            ui={{
                                size: 'small',
                                animation: false,
                            }}
                            data={{
                                title: step.title,
                                description: step.description,
                            }} />
                    </div>
                    <div className={`${css.media} animate`}>
                        <ImageRatio data={{ url: step.imgUrl, alt: step.imgAlt }} />
                    </div>
                </div>
            </div>
        )
    }

    const applyNavActiveClass = (index: number) => {
        if (index === currentStepIndex) {
            return css.active;
        } else if (index < currentStepIndex) {
            return css.visited;
        }
    }

    const getProgressPercentage = () => {
        return currentStepIndex * (100 / (stepsData.length - 1));
    }

    return (
        <section ref={stepperRef} className={`${css.stepper}`} onWheel={handleMouseNavigation}>
            <Container>
                <div id='stepsContainer' className={`${css.stepsContainer}`}>
                    <div id='stepsWrapper' className={css.StepsWrapper}>
                        {stepsData.map((step, index) => (
                            renderStep(step, index)
                        ))}
                    </div>
                    <div className={`${css.pagination}`}>
                        {stepsData.map((step, index) => (
                            <div className={`${css.navLink} ${applyNavActiveClass(index)}`} key={`key-${index}`}>
                                <span className={css.circle}></span>
                                <span className={css.label}>{step.navLabel}</span>
                            </div>
                        ))}
                        <div className={css.progressBar}>
                            <div className={css.progress}>
                                <div className={css.percentage} style={{ height: `${getProgressPercentage()}%` }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section >
    );
};

export default Stepper;
