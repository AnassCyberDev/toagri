import React, { useEffect, useState } from "react";
import { ProductIem } from "./ProductIem";
import { PiFunnelThin } from "react-icons/pi";
import ReactPaginate from "react-paginate";

export const ProductPage = ({ ip_address }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories,setCategories]=useState({})
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20;



  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      const request = await fetch(`${ip_address}/app/api/product`);
      const resp = await request.json();
      console.log(resp)
      setProducts(resp);
      setFilteredProducts(resp);
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch(`${ip_address}/app/api/categories`);
        const data = await response.json();
        console.log(data)
    
        // Transform data into the required structure
        const transformedCategories = { Tout: ["Tout"] };
    
        data.forEach((category) => {
          if(!category.parent){transformedCategories[category.name] = category.subcategories.map(sub => sub.name);}
        });
    console.log(transformedCategories)
        setCategories(transformedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    
  
    fetchCategories()
    fetchProducts();
    console.log(categories)
  }, [ip_address]);


  useEffect(() => {
    console.log(categories);
  }, [categories]);
  // Filter products by category or subcategory
  const onFilter = (category, subcategory = null) => {
    if (category === "Tout") {
      console.log('Tout here')
      setFilteredProducts(products);
    } else if (subcategory) {
      console.log('subcategory here')
      setFilteredProducts(products.filter((product) => product.category.name === subcategory));
    } else {
      console.log('else here',category,subcategory)
      setFilteredProducts(products.filter((product) => product.category.name === category  || categories[category].includes(product.category.name)));
    }
    setCurrentPage(0); // Reset to first page when filtering
  };



  // Handle pagination
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  // Get paginated data
  const offset = currentPage * itemsPerPage;
  const paginatedData = filteredProducts.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="container" style={{minHeight:500}}>
      <div className="row">
        {/* Sidebar */}
        <div className="col-lg-2 col-md-3">
          <div className="list-group">
            {categories&&Object.keys(categories).map((category) => (
              <div key={category}>
                <button
                  className="list-group-item list-group-item-action"
                  onClick={() => {
                    onFilter(category);
                    setExpandedCategory(expandedCategory === category ? null : category);
                  }}
                >
                  {category}
                </button>
                {/* Subcategories */}
                {expandedCategory === category && (
                  <div className="ms-3">
                {categories[category].map((subcategory) => (
  <button
    key={subcategory.id} // Use the subcategory's unique `id` here
    className="list-group-item list-group-item-action"
    onClick={() => onFilter(category, subcategory)} // Pass `subcategory.name` instead of the whole object
  >
    {subcategory} {/* Display only the name of the subcategory */}
  </button>
))}

                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="col-lg-10 col-md-9">
          <div className="row m-3">
            {paginatedData.map((product) => (
              <div key={product.id} className="col-lg-3">
                <ProductIem product={product} ip_address={ip_address} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          {pageCount > 1 && (
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={4}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
            />
          )}
        </div>
      </div>
    </div>
  );
};
