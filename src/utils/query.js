 class Query {
     constructor(query, queryString){
         this.query = query
         this.queryString= queryString
     }


     filter(){
         const queryTo = {...this.queryString}
         const excludedFields =['sort', 'page', 'limit', 'fields']

         
          excludedFields.forEach((el)=>  delete queryTo[el] )

         let queryStr = JSON.stringify(queryTo)
         queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match)=> `$${match}`)
        
         this.query = this.query.find(JSON.parse(queryStr))
         console.log(this)
         return this

     }

     sort(){
if(this.queryString.sort){
    const sortBy = this.queryString.sort.split(',').join(' ')

    this.query = this.query.sort(sortBy)
    

}
else{
return this.query.sort("-createdAt")
}
   
return this
}

     
 limit(){
        if(this.queryString.limit){
            const limit = parseInt(this.queryString.limit)
            this.query = this.query.limit(limit)
           
        }
        else{   this.query.limit(16)}

        return this
 }
 paginate (){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 16
        const skip = (page - 1) * limit
        this.query = this.query.skip(skip).limit(limit)
        return this
 }
 }

 module.exports = Query