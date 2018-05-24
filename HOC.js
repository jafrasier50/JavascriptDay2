var rootContainer = document.getElementById("container")

///Blue Nav ba

var navBar = document.createElement("div")
navBar.className ="navBar"

var logoText = document.createElement("h2")
logoText.className = "navItem"
var homeLink = document.createElement("a")
homeLink.className = "navItem"
var categoriesLink = document.createElement("a")
categoriesLink.className = "navItem"

logoText.innerHTML = "HighOnCoding"
homeLink.innerHTML = "Home"
categoriesLink.innerHTML = "Categories"

navBar.appendChild(logoText)
navBar.appendChild(homeLink)
navBar.appendChild(categoriesLink)
rootContainer.appendChild(navBar)

/// featured post

var featureInfo = document.createElement("div")
featureInfo.className ="featureInfoWrapper"

var featureTitle = document.createElement("h3") 
featureTitle.className = "featureTitleText"
featureTitle.innerHTML= "The Curse of Current Reviews"

var featureContent = document.createElement("p")
featureContent.className = "featureContentText"
featureContent.innerHTML = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews."

featureInfo.appendChild(featureTitle) 
featureInfo.appendChild(featureContent) 
rootContainer.appendChild(featureInfo)

///headline 1

var postWrapper = document.createElement("div")
postWrapper.className = "postWrapper"

var postHeadline = document.createElement("h4")
postHeadline.className = "postHeadline"
postHeadline.innerHTML = "Hello WatchKit"

var postContent = document.createElement("p")
postContent.className = "postContent"
postContent.innerHTML = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."

var postSocial = document.createElement("div")
postSocial.className = "postSocial"
postSocial.innerHTML = "312 comments &nbsp &nbsp &nbsp &nbsp 42 likes"

postWrapper.appendChild(postHeadline)
postWrapper.appendChild(postContent)
postWrapper.appendChild(postSocial)
rootContainer.appendChild(postWrapper)

///headline 2 

var postWrapper = document.createElement("div")
postWrapper.className = "postWrapper"

var postHeadline = document.createElement("h4")
postHeadline.className = "postHeadline"
postHeadline.innerHTML = "Introduction to Swift"

var postContent = document.createElement("p")
postContent.className = "postContent"
postContent.innerHTML = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started."

var postSocial = document.createElement("div")
postSocial.className = "postSocial"
postSocial.innerHTML = "123 comments &nbsp &nbsp &nbsp &nbsp 93 likes"

postWrapper.appendChild(postHeadline)
postWrapper.appendChild(postContent)
postWrapper.appendChild(postSocial)
rootContainer.appendChild(postWrapper)