# MongoDB Overview

## What is MongoDB?

MongoDB is an open-source, document-oriented NoSQL database management system designed for flexibility, scalability, and performance in handling unstructured or semi-structured data. It was created by 10gen (now MongoDB, Inc.) and first released in 2009.

### Key Features:

- **Flexible Schema Design**: Dynamic, schema-less data structures.
- **Scalability and Performance**: Horizontal scaling supports large datasets and high traffic.
- **Document-Oriented Storage**: Data stored in BSON (Binary JSON).
- **Dynamic Queries**: Rich query language with complex query support.
- **Aggregation Framework**: Advanced data transformations and analysis.

---

## MongoDB Components

### JSON vs BSON

- **JSON**: Human-readable format for data representation.
- **BSON**: Binary-encoded JSON for efficient storage and faster performance.

### Clusters

- A group of interconnected servers (nodes) that store and manage data collaboratively.

### MongoDB Atlas

- Fully managed cloud database service.
- Features include automated scaling, global clusters, and reduced maintenance overhead.

---

## Database and Collections

### Commands for Management:

```bash
# Database Operations
show dbs;
use <database-name>;
db.dropDatabase();

# Collection Operations
show collections;
db.createCollection('<collection-name>');
db.<collection-name>.drop();
```

### Insert Operations

```javascript
// Single Document
db.collection.insertOne({ field1: value1 });

// Multiple Documents
db.collection.insertMany([{ field1: value1 }, { field1: value2 }]);

// Ordered Inserts
db.collection.insertMany(docs, { ordered: true });
```

### Update Operations

```javascript
// Update Single Document
db.collection.updateOne({ filter }, { $set: { field: value } });

// Update Many Documents
db.collection.updateMany({ filter }, { $set: { field: value } });

// Remove a Field
db.collection.updateOne({ filter }, { $unset: { fieldName: 1 } });
```

### Delete Operations

```javascript
// Single Document
db.collection.deleteOne({ filter });

// Multiple Documents
db.collection.deleteMany({ filter });
```

---

## Queries and Aggregation

### Find Operations

```javascript
// Retrieve Documents
db.collection.find({ key: value });

// Single Document
db.collection.findOne({ key: value });
```

### Aggregation Framework

Pipeline stages include:

- **$match**: Filter documents.
- **$group**: Group by fields and perform aggregations.
- **$sort**: Order results.
- **$project**: Include/exclude fields and transform data.

Example:

```javascript
db.collection.aggregate([
	{ $match: { status: "active" } },
	{ $group: { _id: "$category", total: { $sum: "$price" } } },
	{ $sort: { total: -1 } },
]);
```

---

## Operators in MongoDB

### Comparison Operators

- **$eq**: Equal to.
- **$ne**: Not equal to.
- **$gt**: Greater than.
- **$gte**: Greater than or equal to.
- **$lt**: Less than.
- **$lte**: Less than or equal to.
- **$in**: Matches any value in an array.
- **$nin**: Matches none of the values in an array.

Example:

```javascript
db.collection.find({ price: { $gte: 100 } });
```

### Logical Operators

- **$and**: Joins query clauses with a logical AND.
- **$or**: Joins query clauses with a logical OR.
- **$not**: Inverts the effect of a query clause.
- **$nor**: Joins query clauses with a logical NOR.

Example:

```javascript
db.collection.find({
	$or: [{ status: "A" }, { qty: { $lt: 30 } }],
});
```

### Elements Operator

- **$exists**: Matches documents where a field exists or does not.
- **$type**: Matches documents with fields of a specified type.
- **$size**: Matches array fields with a specified number of elements.

Example:

```javascript
db.collection.find({ tags: { $exists: true } });
```

---

## Cursor Methods

### Methods:

- **count()**: Returns the number of documents matching a query.
- **limit()**: Limits the number of documents returned.
- **skip()**: Skips a specified number of documents.
- **sort()**: Sorts documents based on fields.

Example:

```javascript
db.collection.find({}).sort({ price: 1 }).limit(5).skip(2);
```

### Caveats:

- Using **skip()** on large collections can be inefficient.
- Sorting large result sets may impact performance. Optimize with indexes where possible.

---

## Indexes

### Benefits:

- Accelerated query performance.
- Efficient sorting and aggregation.

### Commands:

```javascript
// Create Index
db.collection.createIndex({ field: 1 });

// Drop Index
db.collection.dropIndex("index_name");
```

---


- How Many Users are active
    
    ```jsx
    [
      {
        $match: {
          isActive:true
        }
      },
      {
        $count: 'Total Number'
      }
    ]
    ```
    
- What is Average age of users
    
    ```jsx
    [
      {
        $group: {
          _id: null,
          Average:{$avg:"$age"}
        }
      }
    ]
    ```
    
- Find Total Number of males and females
    
    ```jsx
    [
      {
        $group: {
          _id: "$gender",
          Average:{$avg:"$age"},
          TotalUsers:{
            $sum:1
          }
        }
      }
    ]
    ```
    
- What is Average age of users by gender
    
    ```jsx
    [
      {
        $group: {
          _id: "$gender",
          Average:{$avg:"$age"}
        }
      }
    ]
    ```
    
- List Top 5 most common fruits
    
    ```jsx
    [
      {
        $group: {
          _id: "$favoriteFruit",
          Average:{$avg:"$age"},
          TotalUsers:{
            $sum:1
          }
        }
      },
      {
        $sort: {
          TotalUsers: -1
        }
      }
    ]
    ```
    
- Which Country has highest number of users
    
    ```jsx
    [
      {
        $group: {
          _id: "$company.location.country",
          Average:{$avg:"$age"},
          TotalUsers:{
            $sum:1
          }
        }
      },
      {
        $sort: {
          TotalUsers: -1
        }
      }
    ]
    ```
    
- Which Country has highest number of active users
    
    ```jsx
    [
      {
        $group: {
          _id: "$company.location.country",
          ActiveUsers: {
            $sum: { $cond: [{ $eq: ["$isActive", true] }, 1, 0] } 
          },
          Average: { $avg: "$age" }, 
        }
      },
      {
        $sort: {
          ActiveUsers: -1 
        }
      }
    ]
    
    ```
    
- Find Unique Eyecolors
    
    ```jsx
    [
      {
        $group: {
          _id: "$eyeColor",
          totalNumberofUsers:{
            $sum:1
          }
        }
      },
      {
        $sort: {
          totalNumberofUsers: -1 
        }
      }
    ]
    
    ```
    
- What is average numbers of tags per user
    
    ```jsx
    [{$group: {
      _id: null,
      AverageNumberOfTags: {$avg:{$size:{$ifNull:["$tags", []]}}}
    }}
    ]
    ```
    
- How many users have tag enim
    
    ```jsx
    [
      {$match: {
        tags:"enim"
      }},
      {$count: 'NumberOfUsersWithTag_enmim'}
    ]
    ```
    
- Name and age of users with tag velit and who are inactive
    
    ```jsx
    [
      {$match: {
        tags:"velit",
        isActive:false,
      }},
      {
        $project: {
          name:1,
          age:1
        }
      }
    ]
    ```
    
- How many user have phone number starting with +1 (940)
    
    ```jsx
    [
      {$match: {
        "company.phone":/^\+1 \(940\)/,
      }},
      {
        $count: 'NumberOfUsersWithPhone'
      }
    ]
    ```
    
- Top 5 Recently registered users
    
    ```jsx
    [
      {$sort: {
        registered: 1
      }},
      {
        $limit: 5
      }
    ]
    ```
    
- categorize Users by favorite fruits
    
    ```jsx
    [
      {
        $group: {
          _id: "$favoriteFruit",
         users:
           {$push:"$name",}
         
        }
      }
    ]
    ```
    
- Total Number of Users with ad as second tag
    
    ```jsx
    [
      {
        $match: {
          "tags.1":"ad"
        }
      },
      {
        $count: 'Numberofusers'
      }
    ]
    ```
    
- List all the companies and Total Number of Users in country USA
    
    ```jsx
    [
      {
        $match: {
          "company.location.country": "USA"
      }},
      {
        $group: {
          _id: "$company.title",
          TotalNumberOfUsers: {
            $sum: 1
          }
        }
      }
    ]
    ```
