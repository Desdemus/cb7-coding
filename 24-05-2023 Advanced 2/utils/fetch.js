export const BASE_URL = "https://dummyjson.com";

export const GET = async (endpoint) => {

    const res = await fetch(BASE_URL + endpoint);
    const data = await res.json();
    return data;
};


export const POST = async (endpoint, body) => {
    try {
        const res = await fetch(BASE_URL + endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        if (res.status >= 300 && res.status <= 599) {
            const data = await res.json();

            return data;
        } else {
            throw new Error("Can't reach the server");
        }
    } catch (error) {
        alert(
            "Server is off-line Error: " +
            error.message +
            "We'll work in localside."
        );
    }
};




export const DELETE = async (endpoint) => {
    try {
        const res = await fetch(BASE_URL + endpoint, {
            method: "DELETE",
        }
        )
        if (res.status >= 300 && res.status <= 599) {
            const data = await res.json();

            return data;
        } else {
            throw new Error("Can't delete into the server");
        }
    } catch (error) {
        alert(
            "Server is off-line Error: " +
            error.message +
            "We'll work in localside."
        );
    }
};






