import BookList from "@/components/BookList";
import BookOverview from "@/components/BookOverview";
import { db } from "@/database/drizzle";
import { sampleBooks } from "@/constants";
import { users } from "@/database/schema";

const Home = async () => {
  const result = await db.select().from(users);
  console.log(JSON.stringify(result, null, 2));

  return (
    <>
      <BookOverview {...(sampleBooks[0] as Book)} />

      <BookList
        title="Latest Books"
        books={sampleBooks as Book[]}
        containerClassName="mt-28"
      />
    </>
  );
};

export default Home;
