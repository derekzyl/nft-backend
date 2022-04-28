 class Query {
     constructor(query, queryString){
         this.query = query
         this.queryString= queryString
     }


     filter(){
         const queryTo = {...queryString}
         const exclude =['sort', 'page', 'limit', 'fields']
          exclude.forEach((el)=> queryTo[el] )

         let queryStr = JSON.stringify(queryTo)
         queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match)=> `$${match}`)
         this.query = this.query.find(JSON.parse(queryStr))
         return this

     }

     sort(){
if(this.queryString.sort){
    const sortBy = this.queryString.split(',').join(' ')

    this.query = this.query.sort(sortBy)
    return this

}
else{
return this.query
}
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