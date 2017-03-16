
/** * Created by Frolova on 02.03.2017. **/
function ContextMenu( menuExample) {

        this.createMenu = function () {
            var btn = document.createElement("BUTTON");        // Create a <button> element
            var t = document.createTextNode("CLICK ME");       // Create a text node
            btn.appendChild(t);                                // Append the text to <button>
            document.body.appendChild(btn);                   // Append <button> to <body>
            createList(menuExample);
            document.getElementsByTagName('UL')[0].id = "contextMenu";
        };
        this.openContextMenu = function () {
            var cxElement = document.getElementById("contextMenu"); // // This is the actual HTML context menu:
            document.body.oncontextmenu = function(e) {
                event.preventDefault();
                var target = event.target;
                if (event.target.nodeName != 'BUTTON') return;
                showContextMenu(cxElement);
                alert( 'Ура!' );
            }
            document.body.onclick = function(e) {
                event.preventDefault();
                cxElement.style.display = "none";
                alert( 'Why&' );
            }
        }


}
function showContextMenu(cxElement) {

    // Show only the relevant buttons given the current state.
   // var cmd = diagram.commandHandler;
  /*  document.getElementById("cut").style.display = cmd.canCutSelection() ? "block" : "none";
    document.getElementById("copy").style.display = cmd.canCopySelection() ? "block" : "none";
    document.getElementById("paste").style.display = cmd.canPasteSelection() ? "block" : "none";
    document.getElementById("delete").style.display = cmd.canDeleteSelection() ? "block" : "none";
    document.getElementById("color").style.display = (obj !== null ? "block" : "none");
    */
    // Now show the whole context menu element
    cxElement.style.display = "block";

    //cxElement.style.left = mousePt.x + "px";
    //cxElement.style.top = mousePt.y + "px";
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
                        else{
                            if(typeof(item) == "object") {
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