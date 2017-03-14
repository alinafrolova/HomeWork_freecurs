
/** * Created by Frolova on 02.03.2017. **/
function ContextMenu( menuExample) {
   
        this.createMenu = function () {
            console.log(menuExample);
            createList(menuExample);
        };
        
   
       

}

function createList(listData, listContainer, itemContainer, parent) {
   
    var newUL = document.createElement(listContainer || 'ul'), //create ul
        itemContainer = itemContainer || 'li',
        newLi = [],
        parent = parent || document.body;
       
            listData.forEach(function(item,i){
                for (var key in item) {
                        newLi[i] = document.createElement(itemContainer);//create li
                        newUL.appendChild(newLi[i]);
                        
                        if (Array.isArray((item[key]))){ parent = newLi[i]; createList(item[key],listContainer, itemContainer,parent); }
                        else{ if(typeof(item) == "object") {
                            if (key === 'title') {
                                parent.appendChild(newUL);
                                newLi[i].appendChild( document.createTextNode(item.title));
                            }
                        }
                        }
                    }
               
            });
    var masLI = document.getElementsByTagName('li');
    for (var j = 0; j < masLI.length; j++ ){
        if (!masLI[j].innerText) {masLI[j].remove();}
    }
    
}