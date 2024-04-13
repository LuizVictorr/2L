export interface Product {
    id:          string;
    name:        string;
    description?: string;
    price:       string | number;
    currency:    string;
    image:       string;
    images?:     string[];
    category:    string;
    outlet:      string;
    promotion:   string;
    highlights:  string;
    p:           string;
    m:           string;
    g:           string;
}