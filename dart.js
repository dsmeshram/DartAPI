
var dart = function(option){
  dartapi = this;
  dartapi.option = option;
}

dart.prototype.bind = function (element,object) {
  bindData(element,object);
};


dart.prototype.repeart = function (element,object) {
  repeart(element,object);
};

function repeart(domElement,obj){



  for(var a =0;a<obj.length;a++)
  {

    var currentNode,
      ni = document.createNodeIterator(domElement,NodeFilter.SHOW_ELEMENT);

    while(currentNode = ni.nextNode())
    {
        if(currentNode.getAttribute("bind") != null){
          var bind = currentNode.getAttribute("bind").split(":");
          if(a == 0){
            var cln = domElement;

            var domAttr = bind[0].trim(); // the attribute on the DOM element
            var itemAttr = bind[1].trim(); // the attribute the object
            var values = obj[a][itemAttr];
            cln[domAttr] = decodeURIComponent(values);
            currentNode.parentElement.appendChild(cln);
          }else{
            var cln = currentNode.cloneNode(true);
            var domAttr = bind[0].trim(); // the attribute on the DOM element
            var itemAttr = bind[1].trim(); // the attribute the object
            var values = obj[a][itemAttr];
            cln[domAttr] = decodeURIComponent(values);
            currentNode.parentElement.appendChild(cln);
          }
        }
    }

  }
}

function bindData(domElement,obj){
  var currentNode,
    ni = document.createNodeIterator(domElement,NodeFilter.SHOW_ELEMENT);

  while(currentNode = ni.nextNode())
  {
      if(currentNode.getAttribute("bind") != null){
        domElement = currentNode;
        var bind = domElement.getAttribute("bind").split(":");
        var domAttr = bind[0].trim(); // the attribute on the DOM element
        var itemAttr = bind[1].trim(); // the attribute the object
        var values = obj[itemAttr];
        domElement[domAttr] = decodeURIComponent(values);
      }
  }
}
