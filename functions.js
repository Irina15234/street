const handleClickAntenna = () => {
    document.getElementsByClassName('antenna')[0].classList.add('antenna-animation');
    setTimeout(() => document.getElementsByClassName('antenna')[0].classList.remove('antenna-animation'), 2000);
};
