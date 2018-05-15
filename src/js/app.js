import Observer from './moduls/observe'
let observer = new Observer()
let render = function (obj) {
    
    let {
        template = () => { },
        data = {},
        target = null,
        clean = false
    } = obj
    target = document.querySelector(target)
    if (Array.isArray(data)) {
        let list = ''
        data.forEach((item, index) => {
            list += template(item, index)
        })
        if (clean) {
            if (target) target.innerHTML = list
        } else {
            if (target) target.innerHTML += list
        }
    } else {
        if (clean) {
            if (target) target.innerHTML = template(data)
        } else {
            if (target) target.innerHTML += template(data)
        }
    }
   
}

observer.subscribe('datachange', render)

let componenet = {
    el:'#list',
    list:[1, 2, 3],
    listmerge(){
        return this.list.join(", ") 
    },
    template:function(data){
        return `<li>${data}</li>`
    },
    paragraph(data){
        return `${data}`
    },
    add(item){
        this.list.push(item)
        this.build()
        
    },
    remove(index){
        this.list.splice(index,1)
        this.build()
    },

    build(){
        observer.puplish('datachange', {
            data:this.list,
            template:this.template,
            target:this.el,
            clean:true
        })
        observer.puplish('datachange', {
            data: this.listmerge(),
            template: this.paragraph,
            target: '#computed',
            clean: true
        })
    }
}

componenet.build()

document.getElementById('add').addEventListener('keyup', function (e) {
    if(e.keyCode === 13){
        componenet.add(e.target.value)
        e.target.value = ''
    }
})
function getindex (collection, node){
    collection = Array.from(collection)
    return collection.indexOf(node)
}
document.getElementById('list').addEventListener('click', function (e) {
    let target = e.target.matches('li') ? e.target : e.target.closest('li');
    if (target){
 
        componenet.remove(getindex(document.querySelectorAll('#list li'), target ))
    }
})