const bulb = document.querySelector("#bulb")

const onSwitch = document.querySelector("#switchOn")
const offSwitch = document.querySelector("#switchOff")

const switchBulbOn = () => {
    bulb.innerHTML = '<img src="LightbulbOn.svg" height="300px" width="300px">'
}
const switchBulbOff = () => {
    bulb.innerHTML = '<img src="LightbulbOff.svg" height="300px" width="300px">'
}

onSwitch.addEventListener('click', switchBulbOn)
offSwitch.addEventListener('click', switchBulbOff)