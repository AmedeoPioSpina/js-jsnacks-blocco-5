const browserWindow = {
    "tab": ["Facebook", "GitHub", "Gmail"],
    "activeTab": 0
}

const socialList = ["Facebook"];

browserWindow.tab.forEach((item, index) => {
    socialList.forEach((element) => {
        if(item === element){
            delete browserWindow.tab[index]
        }
    })
})

console.log(browserWindow.tab)