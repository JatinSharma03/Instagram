let jsFeedHide = document.getElementsByClassName('jsFeedHide');
let articleBox = document.getElementsByClassName('articleBox');
let articleBoxContainer = document.querySelector('.articleBoxContainer');
let articleBoxNav = document.getElementById('articleBoxNav');
let articleBoxContainerLink = document.getElementById('articleBoxContainerLink');
let articleBoxUpper = document.getElementsByClassName('articleBoxUpper');
let articleBoxLower = document.getElementsByClassName('articleBoxLower');
let articleBoxBottom = document.getElementsByClassName('articleBoxBottom');
let articleBoxNavSearch = document.getElementById('articleBoxNavSearch');

let articleBoxContainerLinkVar = 1;

function funFeed(x){
    Array.from(jsFeedHide).forEach(function(element){
        document.getElementById(element.id).style.display = 'none';
    });
    Array.from(articleBox).forEach(function(element,index){
        element.children[0].style.height = "auto";
        element.style.height = "auto";
        element.children[0].style.width = "100vw";
        element.style.width = "100vw";
        element.style.padding = '0';
            
    });
    Array.from(articleBoxUpper).forEach(function(element1){
        element1.style.display = 'flex';
    });
    Array.from(articleBoxLower).forEach(function(element1){
        element1.style.display = 'flex';
    });
    Array.from(articleBoxBottom).forEach(function(element1){
        element1.style.display = 'grid';
    });
    articleBoxContainer.style.gridTemplateColumns = 'auto';
    articleBoxContainer.style.padding = '0';
    articleBoxContainer.style.paddingTop = '50px'
    articleBoxNav.style.display = 'flex';
    articleBoxContainerLink.href = "#"+x+"a3";
    if(articleBoxContainerLinkVar === 1){
    articleBoxContainerLink.click();
    articleBoxContainerLinkVar = 0;
    }

    Array.from(articleBox).forEach(function(element,index){
    if(document.getElementById(`articleBoxBottomQuotText${index}`).offsetHeight < 50){
        document.getElementById(`articleBoxBottomQuotMore${index}`).style.display = 'none';
    }   
    });
}

articleBoxNavNo.addEventListener('click',function(){
    hidden.click();
    articleBoxContainerLinkVar = 1;
    Array.from(jsFeedHide).forEach(function(element){
        element.style.display = 'block';
    });
    Array.from(articleBox).forEach(function(element){
        // let articleBoxItem = document.getElementById(element.id);
        element.style.height = "33vw";
        element.children[0].style.width = "99.5%";
        element.children[0].style.height = "99.5%";
        element.style.width = "33vw";
        element.style.padding = '0.5%';
    });
    Array.from(articleBoxUpper).forEach(function(element){
        element.style.display = 'none';
    });
    Array.from(articleBoxLower).forEach(function(element){
        element.style.display = 'none';
    });
    Array.from(articleBoxBottom).forEach(function(element){
        element.style.display = 'none';
    });
    articleBoxContainer.style.gridTemplateColumns = 'auto auto auto';
    articleBoxContainer.style.paddingTop = '0'
    articleBoxNav.style.display = 'none';
    articleBoxContainerLink.style.display = 'block';
    articleBoxContainer.style.padding = '.33vw';
});


let d = 0;
function funPostOptions(xid){
    d += 1;
    Array.from(articleBox).forEach(function(element){
        element.style.display = "none";
        element.children[0].style.display = "none";
    });
    Array.from(articleBoxUpper).forEach(function(element1){
        element1.style.display = 'none';
    });
    Array.from(articleBoxLower).forEach(function(element1){
        element1.style.display = 'none';
    });
    Array.from(articleBoxBottom).forEach(function(element1){
        element1.style.display = 'none';
    });
    feedPostDots.style.display = 'block';
    hidden.style.display = 'block'; 
    articleBoxNavSearch.style.display = "none";
    
    let xidElement = document.getElementById(xid);
    xidElement.parentElement.style.display = 'flex';
    xidElement.parentElement.nextElementSibling.style.display = 'block';
    xidElement.parentElement.nextElementSibling.children[0].style.display = 'block';
    xidElement.parentElement.nextElementSibling.nextElementSibling.style.display = 'block';
    xidElement.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'grid';
    
    articleBoxContainerLink.href = `#${xid}`;
}


hidden.addEventListener('click',function(){
    if(a === 1){
        containerAdd.style.display = 'none';
        article.style.display = 'block';
        containerTripleBar.style.display = 'none';
        hidden.style.display = 'none';
        a = 0;
    }
    if(b === 1){
        containerTripleBar.style.display = 'none';
        hidden.style.display = 'none';
        b = 0;
    }
    if(d === 1){
    Array.from(articleBox).forEach(function(element){
        element.style.display = "block";
        element.children[0].style.display = "block";
    });
    Array.from(articleBoxUpper).forEach(function(element1){
        element1.style.display = 'flex';
    });
    Array.from(articleBoxLower).forEach(function(element1){
        element1.style.display = 'block';
    });
    Array.from(articleBoxBottom).forEach(function(element1){
        element1.style.display = 'grid';
    });
    feedPostDots.style.display = 'none';
    hidden.style.display = 'none';
    articleBoxNavSearch.style.display = 'inline-block';
    articleBoxContainerLink.click();
    d = 0;
    }
});
let e = 0;
function funShowQuot(lid,lindex){
    e += 1;
    if(e%2 !== 0){
        document.getElementById(lid).innerText = 'less...';
        document.getElementById(`articleBoxBottomQuot${lindex}`).style.maxHeight = 400+'px';
    }
    else if(e%2 === 0){
        document.getElementById(lid).innerText = 'more...';
        document.getElementById(`articleBoxBottomQuot${lindex}`).style.maxHeight = 50+'px';
    }
}






