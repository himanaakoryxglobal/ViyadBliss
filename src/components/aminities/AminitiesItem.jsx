import Link from "next/link";

const AminitiesItem = ({ data }) => {
  return (
    <div className="amenity-wrapper">
      <Link href="/shop">
        <div className="amenity-main-card">
          <span className="category-icon">
            <i className={`${data.icon}`}></i>
          </span>
          <h4>{data.title}</h4>
        </div>

        {/* Separate Arrow Card */}
        <div className="amenity-arrow-card">
          →
        </div>
      </Link>
    </div>
  );
};

export default AminitiesItem;