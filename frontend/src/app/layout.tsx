import './globals.css'

export default function RootLayout({children}){
  return (
    <html lang="en">
      <head />
      <body>
         <nav>
        <h1>navbar</h1>
        <ul>
          <li><a href="#">list 1</a></li>
          <li><a href="#">list 2</a></li>
        </ul>
      </nav>
        {children}
      </body>
    </html>
  )
}
