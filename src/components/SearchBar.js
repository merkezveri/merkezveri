import React, {useState} from 'react';

// Geçici olarak eklediğimiz data
import sidebarItemList from '../sidebarItemList';

function SearchBar() {
    
    // Arama içerisindeki saklayacağımız değişken ve onu tanımlayacağımız fonksiyon.
    const [input, setInput] = useState("");

    //Arama çubuğunda değişiklik yapıldıkça çalışacak.
    const handleChangeSearch = (e) => {
        //Normal davranışını yaptırmaz.
        e.preventDefault()
        
        // input değişkenimizi hooks kullanarak arama çubuğuna yazılan değere eşitliyoruz.
        setInput(e.target.value)
    }

    let SearchItemList = ""; //Arama Listesi
    // Arama eşleşirse döndür.
    if (input.length > 0 ){
        SearchItemList = sidebarItemList.filter((i) => {
            return i.name.match(input);
        }); //filter close
    } //if close

    return (
        <React.Fragment>
            <input
                className="form-control form-control-dark w-100"
                type="text"
                placeholder="Arama"
                aria-label="Arama"
                onChange={handleChangeSearch}
            />
            
            {
                input.length > 0 ? (
                <ul>
                    {
                        SearchItemList.map((item) => {
                            return (
                                <li class="list-group-item">{item.name}</li>
                            )
                        })
                    }
                </ul>
                ) : ""
            }
            
        </React.Fragment>
    )
}

export default SearchBar
