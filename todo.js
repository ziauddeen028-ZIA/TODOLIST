 
        let inputValue = document.getElementById("list-input");
        let listitem = document.getElementById("list-container");
        

        //add elements
        function adding() {
            let listElement = document.createElement("li");
            listElement.innerHTML = inputValue.value +"<button id=finish onclick=finishing(event)>finish</button><button id=del onclick=deleting(event)>delete</button>";
            listitem.append(listElement);
        }

        //deleting elements
        function deleting(event) {
            event.target.parentElement.remove();
        }

        function finishing(event) {
             event.target.parentElement.style.backgroundColor="lightgreen";
             event.target.parentElement.style.color="black";
             event.target.remove();
        }


