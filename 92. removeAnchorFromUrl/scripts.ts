function removeUrlAnchor(url:string):string{
    const myURL = url.split("#")

    return myURL[0]
  }

  console.log(removeUrlAnchor("www.codewars.com#about"))