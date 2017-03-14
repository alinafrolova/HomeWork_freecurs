/**
 * Created by Frolova on 03.03.2017.
 */
function createList(listData, listContainer, itemContainer, parent) {
    var newUL = document.createElement(listContainer || 'ul'), //create ul
        itemContainer = itemContainer || 'li', 
        newLi = [],        
        parent = parent || document.body;

        listData.forEach(function(item,i){        
         newLi[i] = document.createElement(itemContainer);//create li  
         newUL.appendChild(newLi[i]);                  
         parent.appendChild(newUL); 
           if (Array.isArray(item)){ parent = newLi[i]; createList(item,listContainer, itemContainer,parent); }     
           else{ newLi[i].appendChild(document.createTextNode(listData[i])); }   
        });
}
