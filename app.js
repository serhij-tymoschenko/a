if (window.location.href.includes("#")) {
    const startIndex = window.location.href.indexOf('#') + 2;
    window.location.replace(`reddit://${window.location.href.substring(startIndex)}`)
}