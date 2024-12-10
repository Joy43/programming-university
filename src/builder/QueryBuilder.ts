import { FilterQuery, Query } from "mongoose";



class QueryBuilder<T>{
    public modelQuery:Query<T[],T>;
    public query:Record<string,unknown>;
    // model: Query<T[], T, {}, T, "find">;
    constructor(modelQuery:Query<T[],T>,query:Record<string,unknown>){
        this.modelQuery=modelQuery,
        this.query=query
    }
    // -------serarch---------

    search(searchableFields: string[]) {
        const searchTerm = this?.query?.searchTerm;
        if (searchTerm) {
          this.modelQuery = this.modelQuery.find({
            $or: searchableFields.map(
              (field) =>
                ({
                  [field]: { $regex: searchTerm, $options: 'i' },
                }) as FilterQuery<T>,
            ),
          });
        }
    
        return this;
      }

// ----------filter---------------
filter(){
    const queryObj={...this.query} //copy
    const excludeFields=['searchTerm','sort','limit','page','field'];
    excludeFields.forEach((el)=>delete queryObj[el]);
    this.modelQuery=this.modelQuery.find(queryObj as FilterQuery<T>)
    return this;
}
// -------sort----------
sort(){
const sort=(this?.query?.sort as string)?.split(',')|| '_createdAt';
this.modelQuery=this.modelQuery.sort(sort as unknown as string)
return this;
}
// --------pagination-----------
paginate(){
    const page=Number(this?.query?.page)|| 1;
    const limit =Number(this?.query?.limit )|| 10;
    const skip=(page-1)*limit;
    this.modelQuery=this.modelQuery.skip(skip).limit(limit);
    return this;
}
// ------filed------
fileds(){
    const fields=
    (this?.query?.fields as string)?.split(',')?.join('')|| '-_v';
    this.modelQuery
}

}
export default QueryBuilder;