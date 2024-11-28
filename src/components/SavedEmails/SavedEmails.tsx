import { useEffect, useState } from "react";
import { Avatar, Button, Divider, List, Skeleton } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { SavedEmail } from "../../models/email.model";
import { emailService } from "../../services/email.service";
// Import the SavedEmail type

export const SavedEmails = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<SavedEmail[]>([]);

  const loadMoreData = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const emails = await emailService.getAllEmails(); // Use emailService to fetch emails
      setData(emails); // Assuming you load all emails at once. Adjust if paginated.
    } catch (error) {
      console.error("Failed to load emails:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  const handleButtonClick = async (email: SavedEmail) => {
    await emailService.sendAgain(email);
    console.log("Success:", email);
  alert("הדו'ח נשלח מחדש בהצלחה");
    // You can add more logic here as needed
  };
  
  return (
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: "auto",
        padding: "0 16px",
        border: "1px solid rgba(140, 140, 140, 0.35)",
        direction:'rtl'
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={false} // Set to false if fetching all emails at once
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>זה הכל, אין עוד 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.emailAddress}>
              <List.Item.Meta
                avatar={<Avatar src={"./RoshHeadLogo.png"} />} // Adjust avatar as needed
                title={item.company}
                description={`תאריך: ${item.date}, שעה: ${item.time}, כתובת: ${item.address}`}
              />
              <Button color="default" style={{ marginRight: '8px' }} // Add padding on the right
                onClick={() => handleButtonClick(item)}>שליחה חוזרת</Button>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
