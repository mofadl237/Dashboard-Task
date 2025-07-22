import RenderAccounts from '@/components/Render/RenderAccounts'
import React from 'react'

const Home = () => {
  return (
    <>
    <RenderAccounts  
        revenues={[
          { source: "بيع عدايه طماطم", amount: 3000, date: "2025-07-22" },
          { source: "بيع عدايه فلفل", amount: 2000, date: "2025-07-20" },
          { source: "بيع عدايه موز", amount: 4000, date: "2025-07-19" },
          { source: "بيع كرتونه تفاح فاخر", amount: 1500, date: "2025-07-20" },
        ]}
        expenses={[
          { category: "products", description: "شراء بضاعة من المورد فضل", amount: 15000, date: "2025-07-21" },
          { category: "rent", description: "إيجار يوليو", amount: 1000, date: "2025-07-01" },
          { category: "workers", description: "مرتب العامل محمد", amount: 1500, date: "2025-07-10" },
        ]}
      />
    </>
  )
}

export default Home
