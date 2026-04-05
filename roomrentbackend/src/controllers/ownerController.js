
import db from "../config/db.js";
const getOwnerDashboard = (req, res) => {
    const { owner_id } = req.params;

    res.json({
        message: "Welcome Owner Dashboard",
        owner_id: owner_id
    });
};


// Owner नवीन property system मध्येadd करू शकतो.
const addProperty = async (req, res) => {


    const { owner_id, title, description, price, location, category, bhk_type, status } = req.body;

    if (!owner_id || !title || !description || !price || !location || !category || !bhk_type || !status) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const propertValues = [owner_id, title, description, price, location, category, bhk_type, status];
    try {
        const [result] = await db.query("insert into property(owner_id,title,description,price,location,category,bhk_type,status)  VALUES (?,?,?,?,?,?,?,?)",
            [owner_id, title, description, price, location, category, bhk_type, status],)



        res.status(201).json({ message: "Property added successfully", propertyId: result.insertId });
    }
    catch (err) {
        res.status(500).json({ message: "internal server error", error: err.message });
    }
}


//Property Filtering Owner property type नसु ार filtering करू शकतो जसे1BHK, 2BHK कि ंवा 3BHK.
//त्यामळु ेproperty management सोपेहोत.े

const filterProperty = async (req, res) => {
    try {
        const { catagory, bhk_type } = req.body;
        const [result] = db.query("select * from property where  catagory =? ,bhk_type=?", []);

        if (result.leghth === 0) return res.status("400").json({ msg: "no data found" });
        return res.status(200).json({ massg: "data found" });

    } catch (err) {
        res.status(500).json({
            message: "database error",
            error: err.message,

        });
    }
};


// Properties Update Controller
const updateProperty = async (req, res) => {
    const { property_id } = req.params;
    const { owner_id, title, price, status } = req.body;

    try {
        // १. आधी सध्याचा डेटाबेस मधील स्टेटस तपासा
        const [rows] = await db.query(
            "SELECT status FROM property WHERE property_id = ? AND owner_id = ?",
            [property_id, owner_id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: "Property सापडली नाही किंवा तुमचा अधिकार नाही." });
        }

        const currentStatus = rows[0].status;

        // २. जर सध्याचा स्टेटस 'Rented' असेल आणि तुम्ही title/price बदलण्याचा प्रयत्न करत असाल तर थांबवा
        if (currentStatus === 'Rented' && (title || price)) {
            // फक्त जर 'Available' करायचं असेल तरच पुढे जाऊ द्या
            if (status !== 'Available') {
                return res.status(403).json({
                    message: "प्रॉपर्टी भाड्याने दिलेली (Rented) असल्याने माहिती बदलता येणार नाही. आधी स्टेटस 'Available' करा."
                });
            }
        }

        // ३. आता अपडेट करा
        const sql = `UPDATE property SET title = ?, price = ?, status = ? WHERE property_id = ? AND owner_id = ?`;
        const [updateResult] = await db.query(sql, [title, price, status, property_id, owner_id]);

        if (updateResult.affectedRows === 0) {
            return res.status(400).json({ message: "अपडेट अयशस्वी." });
        }

        res.status(200).json({ message: "Update यशस्वी!" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};




// Properties Delete Controller
const deleteProperty = async (req, res) => {
    const { property_id } = req.params;
    const { owner_id } = req.body;

    try {
        // १. आधी प्रॉपर्टीचा स्टेटस तपासा
        const [rows] = await db.query
            (
                "SELECT status FROM property WHERE property_id = ? AND owner_id = ?",
                [property_id, owner_id]
            );

        if (rows.length === 0) {
            return res.status(404).json({ message: "Property सापडली नाही." });
        }

        const currentStatus = rows[0].status;

        // २. जर स्टेटस 'Rented' किंवा 'Reserved' असेल तर रोखणे
        if (currentStatus === 'Rented' || currentStatus === 'Reserved') {
            return res.status(400).json({
                message: `प्रॉपर्टी सध्या ${currentStatus} आहे. ती डिलीट करण्यापूर्वी तिचा स्टेटस 'Available' करा.`
            });
        }

        // ३. जर स्टेटस 'Available' असेल तरच डिलीट करा
        const [deleteResult] = await db.query(
            "DELETE FROM property WHERE property_id = ? AND owner_id = ?",
            [property_id, owner_id]
        );

        res.status(200).json({ message: "🗑️ प्रॉपर्टी यशस्वीरित्या डिलीट केली!" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Manage Listings
// Owner त्याने add केलेल्या सर्व property listings पाहूशकतो. Listing status available,
// rented कि ंवा sold असा बदलता येतो.

const manageListings = async (req, res) => {

    try {
        const { owner_id } = req.params;
        const [listings] = await db.query(
            "SELECT * FROM property WHERE owner_id = ?",
            [owner_id]
        );
        res.status(200).json({ listings });
    }

    catch (err) {
        res.status(500).json({ error: err.message });
    }

}


export { addProperty, getOwnerDashboard, filterProperty, updateProperty, deleteProperty, manageListings };