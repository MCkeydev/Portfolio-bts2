import { gsap } from 'gsap';
import React from 'react';
import Tools from '../Utils/Tools';

interface IObserverProps {
	children: React.ReactElement | Array<React.ReactElement>;
	// Allows us to override default gsap animation.
	animation?: GSAPTweenVars;
}

/**
 * Observer component that allows components to appear in clean manner.
 * All children components must have a 'className' prop.
 * @param props
 * @returns
 */
const Observer: React.FC<IObserverProps & React.PropsWithChildren> = (
	props,
) => {
	const [classKey, setClassKey] = React.useState<string>(
		Tools.randomString(),
	);
	/**
	 *
	 * @param entries Callback passed to the observer that animates each component.
	 */
	const observerCallback: IntersectionObserverCallback = React.useCallback(
		(entries, observer) => {
			// We loop on each entry of the observer.
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					gsap.fromTo(
						`.${classKey}-observed`,
						{ Y: 60, opacity: 0 },
						{
							y: 0,
							opacity: 1,
							duration: 0.75,
							stagger: 0.35,
							ease: 'Power3.easeOut',
							...props.animation,
						},
					);
					observer.unobserve(entry.target);
				}
			});
		},
		[classKey],
	);
	// Use of react useRef
	const observerRef = React.useRef(
		new IntersectionObserver(observerCallback, {
			threshold: 0.1,
			root: null,
			rootMargin: '0px',
		}),
	);

	// First render effect that observes all children.
	React.useEffect(() => {
		if ('' === classKey) return;
		if (Array.isArray(props.children)) {
			let allTargets = document.querySelectorAll(`.${classKey}-observed`);
			Array.from(allTargets).forEach((element) => {
				observerRef.current.observe(element);
			});
		} else {
			let currentElement = document.querySelector(
				`.${classKey}-observed`,
			);
			if (null !== currentElement) {
				observerRef.current.observe(currentElement);
			}
		}
	}, [classKey]);

	return (
		<>
			{Array.isArray(props.children)
				? props.children.map((element, index) => {
						if (element.props['anchorId']) return;
						return React.cloneElement(element, {
							className: `${classKey}-observed observerHidden`,
							key: `${classKey + index}`,
						});
				  })
				: React.cloneElement(props.children, {
						className: `${classKey}-observed observerHidden`,
				  })}
		</>
	);
};

export default Observer;
