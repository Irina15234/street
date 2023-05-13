const handleClickAntenna = () => {
    document.getElementsByClassName('antenna')[0].classList.add('antenna-animation');
    setTimeout(() => document.getElementsByClassName('antenna')[0].classList.remove('antenna-animation'), 2000);
};

const handleClickLamppost = (index) => {
    document.getElementsByClassName('lamppost')[index].classList.add('lamppost-animation');
    setTimeout(() => document.getElementsByClassName('lamppost')[index].classList.remove('lamppost-animation'), 3000);
};

const handleClickTree = (index) => {
    const element = document.getElementsByClassName('tree__top')[index];
    element.classList.add('tree-animation');
    setTimeout(() => document.getElementsByClassName('tree__top')[index].classList.remove('tree-animation'), 2000);

    leafFall(element);
};

const leafFall = (element) => {
    let r = i => Math.random() * (i || 1);

    const leafFallInterval = setInterval(function () {
        let leaf = document.createElement('div');
        element.append(leaf)
        let leafStyle = leaf.style;

        leafStyle.width = `${6 + r(8)}px`;
        leafStyle.height = `${10 + r(4)}px`;
        leafStyle.backgroundColor = "#98e5a5";
        leafStyle.borderRadius = "40%";
        leafStyle.position = "absolute";
        leafStyle.transition = `${1 + r(3)}s cubic-bezier(${r()},${r()},${r()},${r()})`;
        leafStyle.left = `${r(element.clientWidth)}px`;
        leafStyle.top = "10px";

        setTimeout(a => {
            leafStyle.top = `${130 + r(30)}px`;
            leafStyle.transform = `rotate(${r(2000) - 1000}deg)`;
            leafStyle.backgroundColor = "#fcf87f";
            leafStyle.transform = `translate(${r(20)}px) rotate(${r(1000) - 500}deg)`;
        }, 100)

        setTimeout(() => leafStyle.opacity = "0", 2000);
        setTimeout(() => leaf.remove(), 3000);

    }, 200);

    setTimeout(() => clearInterval(leafFallInterval), 3000);
};

const handleClickPipe = () => {
    const element = document.getElementsByClassName('pipe')[0];
    smoke(element);
};

const smoke = (element) => {
    let r = i => Math.random() * (i || 1);

    const smokeFallInterval = setInterval(function () {
        let smokeItem = document.createElement('div');
        element.append(smokeItem)
        let smokeStyle = smokeItem.style;

        smokeStyle.width = `${12 + r(12)}px`;
        smokeStyle.height = `${12 + r(12)}px`;
        smokeStyle.opacity = "0.6";
        smokeStyle.backgroundColor = "#ffffff";
        smokeStyle.borderRadius = "100%";
        smokeStyle.position = "absolute";
        smokeStyle.transition = `${1 + r(3)}s linear`;
        smokeStyle.left = `${r(element.clientWidth / 2)}px`;
        smokeStyle.top = "-20px";

        setTimeout(a => {
            smokeStyle.top = `${-50 -r(100)}px`;
            smokeStyle.transform = `translate(-${r(20)}px)`;
        }, 100)

        setTimeout(() => {
            smokeStyle.opacity = "0";
            smokeStyle.width = `${22 + r(30)}px`;
            smokeStyle.height = `${22 + r(30)}px`;
        }, 1000);
        setTimeout(() => smokeItem.remove(), 3000);

    }, 200);

    setTimeout(() => clearInterval(smokeFallInterval), 5000);
};

const handleClickSignboard = () => {
    document.getElementsByClassName('signboard')[0].classList.add('signboard-animation');
    setTimeout(() => document.getElementsByClassName('signboard')[0].classList.remove('signboard-animation'), 3000);
};
